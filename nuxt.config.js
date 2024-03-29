export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,
  loading: {
    color: '#28a745',
    height: '3px'
  },

  router:{
    //middleware:['setTheme']
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    __dangerouslyDisableSanitizers: ['script'],
    title: 'YMath.io',
    titleTemplate:'%s • YMath.io',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Self-paced high school math material, explained to be understood.\n'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/icon.png' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css' },
      {rel:'stylesheet', href: 'https://unpkg.com/mathlive@0.27.4/dist/mathlive.css'},
      {rel:'stylesheet', href:'https://unpkg.com/mathlive@0.27.4/dist/mathlive.core.css'}
    ],
    script: [
      {
        innerHTML:"const isDark = localStorage.darkMode === 'true' || (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark', isDark)",
        type:'text/javascript'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/tailwind.css',
    '@mdi/font/css/materialdesignicons.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
   // {src:'~/plugins/mathquill.js', mode:'client'},
    '~/plugins/jsonviewer.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/moment',
    '@/modules/sitemapRouteGenerator',
    '@nuxtjs/sitemap'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    },
    meta: {
      name:'YMath.io',
      description:'Self-paced high school math material, explained to be understood.',
      author: 'Saumya Singhal',
      theme_color:'#00ab33',
      ogHost:'https://ymath.io',
      favicon:true,
      mobileAppIOS: true,
      appleStatusBarStyle: 'black-translucent',
      ogImage:true,
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      remarkPlugins: [
        'remark-math','remark-mermaid' ,'remark-captions', 'remark-squeeze-paragraphs', 'remark-slug', 'remark-autolink-headings', 'remark-external-links', 'remark-footnotes'
      ],
      rehypePlugins: [
        'rehype-katex', 'rehype-minify-whitespace', 'rehype-sort-attribute-values', 'rehype-sort-attributes', 'rehype-raw'
      ],
      prism: {
        theme: '~/assets/css/night-owl.css' //duotone-sea.css'
      }
    }
  },

  hooks: {
    'content:file:beforeParse': (file) => {
      if (file.extension !== '.md') return
      file.data = file.data.replace(/\$\$/g, '\n$$$\n');

      try {
        const [course, chapter, lesson] = file.path.split('/content/courses/')[1].split('/');

        file.data = file.data.replace(/^\s*@(\d)(.*)$/gm, `<practice-problem-wrapper :number='$1' path='courses/${course}/${chapter}/${lesson}' text='$2' ></practice-problem-wrapper>`);
        //console.log(file.data);
      }
      catch (e) {

      }
    },
    'content:file:beforeInsert': async (doc, db) => {
      if (doc.type === 'problem'){
        let parse = db.markdown.toJSON;
        parse = parse.bind(db.markdown);
        // text is the body content, w/o frontmatter
        const {text} = doc;
        let docInfo = {
          problemStatement:'',
          hints:[],
          solutions:[]
        }
        // 1. separate by @
        const splitted = text.split('@');
        splitted.shift();
        for ( const rawFragment of splitted){
          let text = rawFragment.split('\n');
          const type = text.shift();
          text = text.join('\n').trim();
          switch (type) {
            case 'statement':
              docInfo.problemStatement = await parse(text);
              break;
            case 'hint':
              docInfo.hints.push(await parse(text));
              break;
            case 'solution':
              docInfo.solutions.push(await parse(text));

          }
        }
        Object.assign(doc, docInfo);
      }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { 'loose': true }]
      ]
    },
    extend(config, ctx) {
      config.resolve.alias['vue'] = 'vue/dist/vue.common';

    }
  },
  sitemap: {
    hostname: 'https://ymath.io'
  },

  generate: {
    fallback: '404.html'
  }
}
