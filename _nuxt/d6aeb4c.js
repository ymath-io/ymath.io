(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{291:function(t,e,n){"use strict";n.r(e);n(36),n(26),n(35),n(46),n(30),n(47);var o=n(22),l=n(290),r=n.n(l);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={name:"MathLiveInput",props:{id:{type:String,default:""},value:{type:String,default:""},config:{type:Object,default:function(){return{}}},onKeystroke:{type:Function,default:function(t,e){return!0}},onMoveOutOf:{type:Function,default:function(t){return!0}},onTabOutOf:{type:Function,default:function(t){return!0}}},watch:{value:function(t,e){t!==e&&this.$el.mathfield.latex(t,{suppressChangeNotifications:!0})},config:{deep:!0,handler:function(t){this.$el.mathfield.$setConfig(t)}}},mounted:function(){var t=this;this.$nextTick((function(){r.a.makeMathField(t.$el,f(f({},t.config),{},{onContentDidChange:function(e){t.$emit("input",t.$el.mathfield.latex())},onFocus:function(e){t.$emit("focus")},onBlur:function(e){t.$emit("blur")},onContentWillChange:function(e){t.$emit("content-will-change")},onSelectionWillChange:function(e){t.$emit("selection-will-change")},onUndoStateWillChange:function(e,n){t.$emit("undo-state-will-change",n)},onUndoStateDidChange:function(e,n){t.$emit("undo-state-did-change",n)},onVirtualKeyboardToggle:function(e,n,o){t.$emit("virtual-keyboard-toggle",n,o)},onReadAloudStatus:function(e,n){t.$emit("read-aloud-status",n)},onKeystroke:function(e,n,o){return t.onKeystroke(n,o)},onMoveOutOf:function(e,n){return t.onMoveOutOf(n)},onTabOutOf:function(e,n){return t.onTabOutOf(n)}}))}))},methods:{perform:function(t){this.$el.mathfield.$perform(t)},hasFocus:function(){return this.$el.mathfield.$hasFocus()},focus:function(){this.$el.mathfield.$focus()},blur:function(){this.$el.mathfield.$blur()},text:function(t){return this.$el.mathfield.$text(t)},selectedText:function(t){return this.$el.mathfield.$selectedText(t)},insert:function(text,t){this.$el.mathfield.$insert(text,t)},keystroke:function(t,e){return this.$el.mathfield.$keystroke(t,e)},typedText:function(text){this.$el.mathfield.$keystroke(text)},selectionIsCollapsed:function(){return this.$el.mathfield.$selectionIsCollapsed()},selectionDepth:function(){return this.$el.mathfield.$selectionDepth()},selectionAtStart:function(){return this.$el.mathfield.$selectionAtStart()},selectionAtEnd:function(){return this.$el.mathfield.$selectionAtEnd()},select:function(){this.$el.mathfield.$select()},clearSelection:function(){this.$el.mathfield.$clearSelection()}}},d=n(12),component=Object(d.a)(h,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"mathfield",attrs:{id:t.id}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports}}]);