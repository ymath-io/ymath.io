export default function () {
    this.nuxt.hook('generate:done', (context) => {
      const routesToExclude = [
        '/test'
      ] // Add any route you don't want in your sitemap. Potentially get this from an .env file.
      const allRoutes = Array.from(context.generatedRoutes)
      const routes = allRoutes.filter(route => {

        return ! (routesToExclude.includes(route) || /\/learn\/(exponents|trigonometry|physics-c-mechanics)\/?.*/.test(route) )
      })
  
      this.nuxt.options.sitemap.routes = [...routes]
    })
  }