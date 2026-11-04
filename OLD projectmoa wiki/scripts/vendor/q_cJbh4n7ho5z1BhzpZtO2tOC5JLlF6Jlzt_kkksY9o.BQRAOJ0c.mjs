import{__esmMin as e}from"./rolldown-runtime.C2b6J7Tx.mjs";import{Y as t,ae as n,ie as r,init_jsx_runtime as i,init_npm_react_18_2 as a,init_ssg_sandbox_shims as o,p as s,pe as c,u as l,ue as u,window as d,ye as f}from"./react.BeJexp10.mjs";import{LayoutGroup as ee,init_framer_motion_5EXT2AMG as te,motion as ne}from"./motion.CiLn7YGk.mjs";import{ComponentViewportProvider as p,Container as m,ControlType as h,GeneratedComponentContext as re,PropertyOverrides2 as g,ResolveLinks as ie,addFonts as _,addPropertyControls as v,cx as y,getFonts as b,init_framer_2O4XSJDC as x,useComponentViewport as ae,useCustomCursors as oe,useHydratedBreakpointVariants as se,useIsOnFramerCanvas as S,useLocaleInfo as ce,useRouter as le,withCSS as ue,withOptimizedAppearEffect as de}from"./framer.Cxn081UD.mjs";import{containerStyles as C,emptyStateStyle as w,init_colorFromToken as fe,init_constants as pe,init_isBrowser as me,init_isMotionValue as he,init_propUtils as ge,init_useAutoMotionValue as _e,init_useConstant as ve,init_useControlledState as ye,init_useFontControls as be,init_useOnChange as xe,init_useOnNavigationTargetChange as Se,init_useRenderTarget as Ce,init_useUniqueClassName as we,init_variantUtils as Te,useIsOnCanvas as Ee}from"./default-utils.js__0.45.CaW4Ay7o.mjs";import{Youtube as T,init_YouTube as De}from"./YouTube.BnXxzXoG.mjs";import{gp5789hm3_default as E,init_gp5789hm3 as Oe}from"./gp5789hm3.B-N54UeX.mjs";import{init_suXEgob8X as ke,metadata as D}from"./suXEgob8X.DQ7VTANi.mjs";var Ae=e(()=>{pe(),Se(),ve(),fe(),he(),we(),Te(),me(),xe(),_e(),be(),Ce(),ye(),ge()});function O({type:e,url:t,html:n,style:r={}}){return e===`url`&&t?s(Me,{url:t,style:r}):e===`html`&&n?s(Ne,{html:n,style:r}):s(je,{style:r})}function je({style:e}){return s(`div`,{style:{minHeight:M(e),...w,overflow:`hidden`,...e},children:s(`div`,{style:F,children:`To embed a website or widget, add it to the properties\xA0panel.`})})}function Me({url:e,style:t}){let n=!t.height;/[a-z]+:\/\//.test(e)||(e=`https://`+e);let r=Ee(),[i,a]=f(r?void 0:!1);if(u(()=>{if(!r)return;let t=!0;a(void 0);async function n(){let n=await fetch(`https://api.framer.com/functions/check-iframe-url?url=`+encodeURIComponent(e));if(n.status==200){let{isBlocked:e}=await n.json();t&&a(e)}else{let e=await n.text();console.error(e);let t=Error(`This site can’t be reached.`);a(t)}}return n().catch(e=>{console.error(e),a(e)}),()=>{t=!1}},[e]),r&&n)return s(j,{message:`URL embeds do not support auto height.`,style:t});if(!e.startsWith(`https://`))return s(j,{message:`Unsupported protocol.`,style:t});if(i===void 0)return s(Le,{});if(i instanceof Error)return s(j,{message:i.message,style:t});if(i===!0){let n=`Can’t embed ${e} due to its content security policy.`;return s(j,{message:n,style:t})}return s(`iframe`,{src:e,style:{...N,...t},loading:`lazy`,fetchPriority:r?`low`:`auto`,referrerPolicy:`no-referrer`,sandbox:k(r)})}function k(e){let t=[`allow-same-origin`,`allow-scripts`];return e||t.push(`allow-downloads`,`allow-forms`,`allow-modals`,`allow-orientation-lock`,`allow-pointer-lock`,`allow-popups`,`allow-popups-to-escape-sandbox`,`allow-presentation`,`allow-storage-access-by-user-activation`,`allow-top-navigation-by-user-activation`),t.join(` `)}function Ne({html:e,...t}){let n=e.includes(`</script>`);if(n){let n=e.includes(`</spline-viewer>`),r=e.includes(`<!-- framer-direct-embed -->`);return s(n||r?Fe:Pe,{html:e,...t})}return s(Ie,{html:e,...t})}function Pe({html:e,style:t}){let n=c(),[r,i]=f(0);u(()=>{var e;let t=(e=n.current)?.contentWindow;function r(e){if(e.source!==t)return;let n=e.data;if(typeof n!=`object`||!n)return;let r=n.embedHeight;typeof r==`number`&&i(r)}return d.addEventListener(`message`,r),t?.postMessage(`getEmbedHeight`,`*`),()=>{d.removeEventListener(`message`,r)}},[]);let a=`
<html>
    <head>
        <style>
            html, body {
                margin: 0;
                padding: 0;
            }

            body {
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
            }

            :root {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            * {
                box-sizing: border-box;
                -webkit-font-smoothing: inherit;
            }

            h1, h2, h3, h4, h5, h6, p, figure {
                margin: 0;
            }

            body, input, textarea, select, button {
                font-size: 12px;
                font-family: sans-serif;
            }
        </style>
    </head>
    <body>
        ${e}
        <script type="module">
            let height = 0

            function sendEmbedHeight() {
                window.parent.postMessage({
                    embedHeight: height
                }, "*")
            }

            const observer = new ResizeObserver((entries) => {
                if (entries.length !== 1) return
                const entry = entries[0]
                if (entry.target !== document.body) return

                height = entry.contentRect.height
                sendEmbedHeight()
            })

            observer.observe(document.body)

            window.addEventListener("message", (event) => {
                if (event.source !== window.parent) return
                if (event.data !== "getEmbedHeight") return
                sendEmbedHeight()
            })
        </script>
    <body>
</html>
`,o={...N,...t},l=!t.height;return l&&(o.height=r+`px`),s(`iframe`,{ref:n,style:o,srcDoc:a})}function Fe({html:e,style:t}){let n=c();return u(()=>{let t=n.current;if(t)return t.innerHTML=e,A(t),()=>{t.innerHTML=``}},[e]),s(`div`,{ref:n,style:{...P,...t}})}function Ie({html:e,style:t}){return s(`div`,{style:{...P,...t},dangerouslySetInnerHTML:{__html:e}})}function A(e){if(e instanceof Element&&e.tagName===`SCRIPT`){let t=document.createElement(`script`);t.text=e.innerHTML;for(let{name:n,value:r}of e.attributes)t.setAttribute(n,r);e.parentElement.replaceChild(t,e)}else for(let t of e.childNodes)A(t)}function Le(){return s(`div`,{className:`framerInternalUI-componentPlaceholder`,style:{...C,overflow:`hidden`},children:s(`div`,{style:F,children:`Loading…`})})}function j({message:e,style:t}){return s(`div`,{className:`framerInternalUI-errorPlaceholder`,style:{minHeight:M(t),...C,overflow:`hidden`,...t},children:s(`div`,{style:F,children:e})})}function M(e){let t=!e.height;if(t)return 200}var N,P,F,Re=e(()=>{o(),i(),a(),x(),Ae(),v(O,{type:{type:h.Enum,defaultValue:`url`,displaySegmentedControl:!0,options:[`url`,`html`],optionTitles:[`URL`,`HTML`]},url:{title:`URL`,type:h.String,description:`Some websites don’t support embedding.`,hidden(e){return e.type!==`url`}},html:{title:`HTML`,type:h.String,displayTextArea:!0,hidden(e){return e.type!==`html`}}}),N={width:`100%`,height:`100%`,border:`none`},P={width:`100%`,height:`100%`,display:`flex`,flexDirection:`column`,justifyContent:`center`,alignItems:`center`},F={textAlign:`center`,minWidth:140}}),I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,ze=e(()=>{i(),x(),te(),a(),De(),Re(),Oe(),ke(),I=b(E),L=de(m),R=b(T),z=b(O),B={daKUozOmK:`(min-width: 1184px)`,sTp0kZDWh:`(max-width: 869px)`,ybnBYBfH1:`(min-width: 870px) and (max-width: 1183px)`},V=`framer-mOL8Q`,H={daKUozOmK:`framer-v-ugokxv`,sTp0kZDWh:`framer-v-c329lr`,ybnBYBfH1:`framer-v-1993bkf`},U={bounce:.2,delay:0,duration:.4,type:`spring`},W={opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,transition:U,x:0,y:0},G={opacity:.001,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:-150},K=({value:e})=>{let t=S();return t?null:s(`style`,{dangerouslySetInnerHTML:{__html:e},"data-framer-html-style":``})},q={Desktop:`daKUozOmK`,Phone:`sTp0kZDWh`,Tablet:`ybnBYBfH1`},J=({height:e,id:t,width:n,...r})=>({...r,variant:q[r.variant]??r.variant??`daKUozOmK`}),Y=t(function(e,t){let i=c(null),a=t??i,o=n(),{activeLocale:d,setLocale:f}=ce(),te=ae(),{style:h,className:_,layoutId:v,variant:b,...x}=J(e);u(()=>{let e=D(void 0,d);if(e.robots){let t=document.querySelector(`meta[name="robots"]`);t?t.setAttribute(`content`,e.robots):(t=document.createElement(`meta`),t.setAttribute(`name`,`robots`),t.setAttribute(`content`,e.robots),document.head.appendChild(t))}},[void 0,d]),r(()=>{let e=D(void 0,d);document.title=e.title||``,e.viewport&&document.querySelector(`meta[name="viewport"]`)?.setAttribute(`content`,e.viewport)},[void 0,d]);let[S,ue]=se(b,B,!1),de,C=[],w=y(V,...C),fe=le();return oe({}),s(re.Provider,{value:{primaryVariantId:`daKUozOmK`,variantClassNames:H},children:l(ee,{id:v??o,children:[s(K,{value:`html body { background: rgb(0, 0, 0); }`}),l(ne.div,{...x,className:y(w,`framer-ugokxv`,_),ref:a,style:{...h},children:[s(ie,{links:[{href:{hash:`:Ph1aSF4mn`,webPageId:`nvg9XPoy6`},implicitPathVariables:void 0},{href:{hash:`:Ph1aSF4mn`,webPageId:`nvg9XPoy6`},implicitPathVariables:void 0},{href:{hash:`:Ph1aSF4mn`,webPageId:`nvg9XPoy6`},implicitPathVariables:void 0}],children:e=>s(g,{breakpoint:S,overrides:{ybnBYBfH1:{height:280}},children:s(p,{height:104.37710437710437,width:`100vw`,y:0,children:s(L,{animate:W,className:`framer-1aqtuu1-container`,"data-framer-appear-id":`1aqtuu1`,initial:G,layoutScroll:!0,nodeId:`s8fUFqkF1`,optimized:!0,rendersWithMotion:!0,scopeId:`suXEgob8X`,children:s(g,{breakpoint:S,overrides:{sTp0kZDWh:{YZqQCutus:e[2]},ybnBYBfH1:{YZqQCutus:e[1]}},children:s(E,{height:`100%`,id:`s8fUFqkF1`,layoutId:`s8fUFqkF1`,rOpDtu36R:`back to moa`,style:{height:`100%`,width:`100%`},variant:`FnSH8LfYT`,width:`100%`,YZqQCutus:e[0],ZZU_m9v3S:`rgb(255, 166, 166)`})})})})})}),s(p,{children:s(m,{className:`framer-180ikc3-container`,isAuthoredByUser:!0,isModuleExternal:!0,nodeId:`DRTThNrye`,scopeId:`suXEgob8X`,children:s(T,{borderRadius:28,bottomLeftRadius:28,bottomRightRadius:28,height:`100%`,id:`DRTThNrye`,isMixedBorderRadius:!1,isRed:!1,layoutId:`DRTThNrye`,play:`On`,shouldMute:!1,style:{height:`100%`,width:`100%`},thumbnail:`Medium Quality`,topLeftRadius:28,topRightRadius:28,url:`https://www.youtube.com/watch?v=uxh4Y_hcLR0&ab_channel=CafeMusicBGMchannel`,width:`100%`})})}),s(p,{children:s(m,{className:`framer-13qzqxx-container`,isAuthoredByUser:!0,isModuleExternal:!0,nodeId:`Qnfcwn1Bs`,scopeId:`suXEgob8X`,children:s(O,{height:`100%`,html:`<iframe src="../../assets/misc/yq1s5I8Six5G-39980f.html" class="formless-embed" width="100%" height="600px" loading="lazy" allow="microphone" style="border: 0; display: block"></iframe>

<script src="./embed.js" async></script>`,id:`Qnfcwn1Bs`,layoutId:`Qnfcwn1Bs`,style:{height:`100%`,width:`100%`},type:`html`,url:``,width:`100%`})})})]}),s(`div`,{id:`overlay`})]})})}),X=[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-mOL8Q.framer-hi2hj, .framer-mOL8Q .framer-hi2hj { display: block; }`,`.framer-mOL8Q.framer-ugokxv { background-color: #000000; cursor: pointer; height: 660px; overflow: hidden; position: relative; width: 1184px; }`,`.framer-mOL8Q .framer-1aqtuu1-container { flex: none; height: 10%; left: calc(50.00000000000002% - 100% / 2); position: fixed; top: 0px; width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,`.framer-mOL8Q .framer-180ikc3-container { flex: none; height: 270px; left: -524px; position: absolute; top: -565px; width: 480px; }`,`.framer-mOL8Q .framer-13qzqxx-container { flex: none; height: 602px; left: 0px; position: absolute; right: 0px; top: 62px; }`,`@media (min-width: 870px) and (max-width: 1183px) { .framer-mOL8Q.framer-ugokxv { width: 870px; } .framer-mOL8Q .framer-1aqtuu1-container { height: 28%; } .framer-mOL8Q .framer-13qzqxx-container { height: 604px; top: 60px; }}`,`@media (max-width: 869px) { .framer-mOL8Q.framer-ugokxv { width: 390px; }}`],Z=ue(Y,X,`framer-mOL8Q`),Q=Z,Z.displayName=`Page`,Z.defaultProps={height:660,width:1184},_(Z,[{explicitInter:!0,fonts:[]},...I,...R,...z],{supportsExplicitInterCodegen:!0}),$={exports:{default:{type:`reactComponent`,name:`FramersuXEgob8X`,slots:[],annotations:{framerDisplayContentsDiv:`false`,framerImmutableVariables:`true`,framerIntrinsicWidth:`1184`,framerCanvasComponentVariantDetails:`{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"ybnBYBfH1":{"layout":["fixed","fixed"]},"sTp0kZDWh":{"layout":["fixed","fixed"]}}}`,framerScrollSections:`* @framerResponsiveScreen`,framerComponentViewportWidth:`true`,framerContractVersion:`1`,framerAcceptsLayoutTemplate:`false`,framerIntrinsicHeight:`660`}},Props:{type:`tsType`,annotations:{framerContractVersion:`1`}},__FramerMetadata__:{type:`variable`}}}});ze();export{$ as __FramerMetadata__,Q as default};
//# sourceMappingURL=q_cJbh4n7ho5z1BhzpZtO2tOC5JLlF6Jlzt_kkksY9o.BQRAOJ0c.mjs.map