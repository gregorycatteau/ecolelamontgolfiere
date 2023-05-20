import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main$1 = {
  name: "videoplayer",
  props: {
    source: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-8d604a89><iframe class="video" width="560" height="315"${ssrRenderAttr("src", $props.source)} title="YouTube video player" frameborder="0" allow="accelerometer; 
        clipboard-write; 
        encrypted-media; 
        gyroscope; 
        picture-in-picture" allowfullscreen data-v-8d604a89>     
    </iframe><h1 class="title" data-v-8d604a89>${ssrInterpolate($props.title)}</h1></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/videoplayer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-8d604a89"]]);
const _sfc_main = {
  name: "ressources"
};
const _imports_0 = "" + buildAssetsURL("ecoledelaliberte.158e4170.png");
const _imports_1 = "" + buildAssetsURL("librepourapprendre.8b784621.jpeg");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Videoplayer = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mainwrapper" }, _attrs))} data-v-0afac5d6><h1 class="title" data-v-0afac5d6>R\xE9f\xE9rences et ressources</h1><h2 class="subtitle" data-v-0afac5d6> Notre approche peut \xEAtre consid\xE9r\xE9e comme atypique, voire radicale pour certains. Elle est pour nous tout simplement naturelle et pleine de bon sens. Nous vous invitons \xE0 travers ces quelques ressources \xE0 nourrir votre propre r\xE9flexion. </h2><div class="chapterwrapper" data-v-0afac5d6><h3 class="divider" data-v-0afac5d6> Pr\xE9sentation de l&#39;\xE9ducation d\xE9mocratique et de sa version Sudbury </h3>`);
  _push(ssrRenderComponent(_component_Videoplayer, {
    source: "./Une semaine \xE0 la Sudbury Valley School.mp4",
    title: "Une semaine \xE0 la Sudbury Valley School"
  }, null, _parent));
  _push(`</div><div class="chapterwrapper" data-v-0afac5d6><h3 class="divider" data-v-0afac5d6> Des personnes inspirantes </h3>`);
  _push(ssrRenderComponent(_component_Videoplayer, {
    source: "./enthousiasme.mp4",
    title: "Le t\xE9moignage d'Andr\xE9 Stern"
  }, null, _parent));
  _push(`</div><div class="chapterwrapper" data-v-0afac5d6><h3 class="divider" data-v-0afac5d6> Des films \xE0 ne pas manquer </h3>`);
  _push(ssrRenderComponent(_component_Videoplayer, {
    source: "./etredevenir.mp4",
    title: "Etre et devenir"
  }, null, _parent));
  _push(`</div><div class="cerclingtitle" data-v-0afac5d6><h3 class="divider" data-v-0afac5d6> Les livres que nous vous recommandons </h3></div><div class="chapterwrapperbook" data-v-0afac5d6><a href="https://www.mamaeditions.com/catalogue/mutations/l-ecole-de-la-liberte" data-v-0afac5d6><img${ssrRenderAttr("src", _imports_0)} alt="Daniel Greenberg
L\u2019\xC9cole de la libert\xE9
Un mod\xE8le d&#39;\xE9ducation autonome et d\xE9mocratique" data-v-0afac5d6></a><a href="https://www.decitre.fr/livres/libre-pour-apprendre-9782330068868.html" data-v-0afac5d6><img${ssrRenderAttr("src", _imports_1)} alt="Le best seller de Peter Gray " data-v-0afac5d6></a></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ressources.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ressources = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0afac5d6"]]);

export { ressources as default };
//# sourceMappingURL=ressources-6cc09a9a.mjs.map
