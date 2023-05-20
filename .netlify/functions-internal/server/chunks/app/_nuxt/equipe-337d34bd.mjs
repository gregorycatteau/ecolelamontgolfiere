import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import __nuxt_component_0$1 from './Icon-45006cd4.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import '../../nitro/netlify.mjs';
import 'node-fetch-native/polyfill';
import 'ufo';
import 'defu';
import 'radix3';
import 'destr';
import 'scule';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'ohash';
import 'unstorage';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
import 'node:url';
import 'ipx';
import 'pathe';
import 'unified';
import 'mdast-util-to-string';
import 'micromark/lib/preprocess.js';
import 'micromark/lib/postprocess.js';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'remark-emoji';
import 'rehype-slug';
import 'remark-squeeze-paragraphs';
import 'rehype-external-links';
import 'remark-gfm';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'remark-mdc';
import 'remark-parse';
import 'remark-rehype';
import 'mdast-util-to-hast';
import 'detab';
import 'unist-builder';
import 'mdurl';
import 'slugify';
import 'unist-util-position';
import 'unist-util-visit';
import 'shiki-es';
import 'unenv/runtime/npm/consola';
import './config-f1d4f57c.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'cookie-es';
import '@supabase/supabase-js';
import '@formkit/core';
import '@formkit/utils';
import '@formkit/inputs';
import '@formkit/rules';
import '@formkit/validation';
import '@formkit/i18n';
import '@formkit/themes';
import '@formkit/observer';

const _imports_0 = "" + buildAssetsURL("jenny-portrait.f4f2db15.jpg");
const _imports_1 = "" + buildAssetsURL("kate.45b5c54c.jpg");
const _imports_2 = "" + buildAssetsURL("greg.19c6595d.jpg");
const _sfc_main$1 = {
  data() {
    return {
      showDiv: false,
      animateQuality: false
    };
  },
  methods: {
    showQuality() {
      this.showDiv = !this.showDiv;
    },
    onanimationend() {
      this.animateQuality = false;
    }
  },
  mounted() {
    this.$nextTick(() => {
      const qualityElement = document.querySelector(".qualityinternal");
      qualityElement.addEventListener("animationend", this.onanimationend);
    });
  },
  beforeUnmount() {
    const qualityElement = document.querySelector(".qualityinternal");
    qualityElement.removeEventListener("animationend", this.onanimationend);
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-690c5804><div data-v-690c5804><h1 class="title" data-v-690c5804>L&#39;\xE9quipe de la Montgolfi\xE8re</h1></div><div class="wrapguardians" data-v-690c5804><h1 class="guardians" data-v-690c5804>Du cot\xE9 de l&#39;administration</h1></div><div class="separation" data-v-690c5804></div><div class="columns" data-v-690c5804><div class="column1" data-v-690c5804><h2 class="jenny" data-v-690c5804>Gestion, organisation, etc</h2><div class="imgwrapper" data-v-690c5804><img${ssrRenderAttr("src", _imports_0)} alt="notfound" class="imagefond" data-v-690c5804></div><h1 class="undername" data-v-690c5804>Jenny</h1><div class="mainskillwrapper" data-v-690c5804><div class="skillwrapper" data-v-690c5804><div class="wrapperdef" data-v-690c5804>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "medical-icon:i-nursery",
    class: "icon"
  }, null, _parent));
  _push(`<h2 class="profession" data-v-690c5804>Ancienne auxilliaire de pu\xE9riculture </h2></div><div class="wrapperdef" data-v-690c5804>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "streamline:interface-hierarchy-3-node-organization-links-structure-link-nodes-network-hierarchy",
    class: "icon"
  }, null, _parent));
  _push(`<h2 class="profession" data-v-690c5804>Responsable de l&#39;organisation</h2></div></div><div class="maincontactwrapper" data-v-690c5804><div class="contactwrapper" data-v-690c5804><a href="mailto:Jenny@ecolelamontgolfiere.fr" data-v-690c5804>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "fluent:mail-16-regular",
    class: "iconmail"
  }, null, _parent));
  _push(`</a></div><div class="contactwrapper" data-v-690c5804><a href="tel:0617784649" data-v-690c5804>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "fluent:phone-16-regular",
    class: "iconphone"
  }, null, _parent));
  _push(`</a></div><div class="contactwrapper" data-v-690c5804><a href="https://www.telegram.me/Jenny_Catteau" data-v-690c5804>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "logos:telegram",
    class: "icontelegram"
  }, null, _parent));
  _push(`</a></div></div></div><div class="try" data-v-690c5804><button data-v-690c5804><h3 class="qualities" data-v-690c5804>Qualit\xE9s</h3></button>`);
  if ($data.showDiv) {
    _push(`<div class="mainquality" data-v-690c5804><div class="wrapperqualityvisual" data-v-690c5804><h4 class="skill1" data-v-690c5804>Organisation</h4><div class="qualityvisual" data-v-690c5804><div class="${ssrRenderClass([{ "qualityinternal-transition": $data.animateQuality }, "qualityinternal"])}" data-v-690c5804></div></div><h4 class="skill2" data-v-690c5804>Gestion</h4><div class="qualityvisual" data-v-690c5804><div class="${ssrRenderClass([{ "qualityinternal-transition": $data.animateQuality }, "qualityinternal"])}" data-v-690c5804></div></div><h4 class="skill3" data-v-690c5804>Communication</h4><div class="qualityvisual" data-v-690c5804><div class="${ssrRenderClass([{ "qualityinternal-transition": $data.animateQuality }, "qualityinternal"])}" data-v-690c5804></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="column2" data-v-690c5804><h2 class="jenny" data-v-690c5804>Repr\xE9sentation, Partenariats, etc</h2><div class="imgwrapper" data-v-690c5804><img${ssrRenderAttr("src", _imports_1)} alt="notfound" class="imagefond" width="900" height="600" data-v-690c5804></div><h1 class="undername" data-v-690c5804>Kate</h1><div class="skillwrapper" data-v-690c5804><div class="wrapperdef" data-v-690c5804>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "material-symbols:psychology-alt-sharp",
    class: "icon"
  }, null, _parent));
  _push(`<h2 class="profession" data-v-690c5804>Psychologue, hypnoth\xE9rapeute </h2></div><div class="wrapperdef" data-v-690c5804>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "carbon:partnership",
    class: "icon"
  }, null, _parent));
  _push(`<h2 class="profession" data-v-690c5804>D\xE9veloppement, partenariat</h2></div></div></div><div class="column3" data-v-690c5804><h2 class="jenny" data-v-690c5804>webmaster, finances, etc</h2><div class="imgwrapper" data-v-690c5804><img${ssrRenderAttr("src", _imports_2)} alt="notfound" class="imagefond" width="900" height="600" data-v-690c5804></div><h1 class="undername" data-v-690c5804>Greg</h1><div class="skillwrapper" data-v-690c5804><div class="wrapperdef" data-v-690c5804>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "fluent-emoji-high-contrast:man-teacher",
    class: "icon"
  }, null, _parent));
  _push(`<h2 class="profession" data-v-690c5804>Formateur</h2></div><div class="wrapperdef" data-v-690c5804>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "streamline:programming-browser-build-build-website-development-window-code-programming-web-backend-browser-dev",
    class: "icon"
  }, null, _parent));
  _push(`<h2 class="profession" data-v-690c5804>Webmaster</h2></div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/team.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-690c5804"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_team = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_team, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/equipe.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const equipe = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { equipe as default };
//# sourceMappingURL=equipe-337d34bd.mjs.map
