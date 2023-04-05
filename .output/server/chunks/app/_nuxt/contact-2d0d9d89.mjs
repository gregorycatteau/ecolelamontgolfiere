import { useSSRContext, ref, resolveComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode } from 'vue';
import { w as wait } from './index-4412e52f.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'h3';
import 'ufo';
import '@formkit/core';
import '@formkit/utils';
import '@formkit/inputs';
import '@formkit/rules';
import '@formkit/validation';
import '@formkit/i18n';
import '@formkit/themes';
import '@formkit/observer';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'ipx';
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

const _sfc_main$1 = {
  __name: "contactform",
  __ssrInlineRender: true,
  setup(__props) {
    const formData = ref({
      nom: "",
      pr\u00E9nom: "",
      email: "",
      message: ""
    });
    async function handleSubmit(data) {
      await wait(3e3);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FormKit = resolveComponent("FormKit");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container2" }, _attrs))} data-v-6763d4fe><h1 class="h1" data-v-6763d4fe>Nous contacter</h1><p data-v-6763d4fe>Vous pouvez nous contacter en utilisant le formulaire ci-dessous :</p><br data-v-6763d4fe>`);
      _push(ssrRenderComponent(_component_FormKit, {
        type: "form",
        "submit-label": "Soumettre",
        value: unref(formData),
        actions: false,
        onSubmit: handleSubmit
      }, {
        default: withCtx(({ state }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 data-v-6763d4fe${_scopeId}>Soumettre</h1>`);
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "text",
              label: "Quel est ton nom ?",
              "prefix-icon": "avatarMan",
              name: "nom",
              placeholder: "par exemple: Dupont",
              validation: "required | length:2,100 | alpha ",
              "validation-messages": { required: "Oups ! Je crois que tu as oubli\xE9 ton nom...", alpha: "Tu dois bien avoir un caract\xE8re bizarre quelque part...", length: "Les noms sont g\xE9n\xE9ralement compris entre 2 et 100 caract\xE8res..." }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "text",
              label: "Quel est ton Pr\xE9nom ?",
              "prefix-icon": "avatarMan",
              name: "pr\xE9nom",
              placeholder: "par exemple: Jean",
              validation: "required | alpha | length:2,100",
              "validation-messages": { required: "Oups ! Je crois que tu as oubli\xE9 ton pr\xE9nom...", alpha: "Tu dois bien avoir un caract\xE8re bizarre quelque part...", length: "Les pr\xE9noms sont g\xE9n\xE9ralement compris entre 2 et 100 caract\xE8res..." }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "email",
              label: "Quel est ton adresse mail ?",
              "prefix-icon": "email",
              name: "email",
              placeholder: "par exemple: jean.dupont@fournisseurmail.fr",
              validation: "required | email",
              "validation-messages": { required: "Oups ! Je crois que tu as oubli\xE9 ton adresse mail...", email: "Ton adresse mail ne semble pas valide..." }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FormKit, {
              type: "textarea",
              label: "Quel est ton message ?",
              name: "message",
              placeholder: "par exemple: Je vous contacte pour vous dire que votre site est super ! On le savait d\xE9j\xE0 mais c'est toujours bon \xE0 entendre !",
              validation: "required |alpha | lenght, 2, 1000",
              "validation-messages": { required: "Oups ! Je crois que tu as oubli\xE9 ton message...", alpha: "Tu dois bien avoir un caract\xE8re bizarre quelque part...", length: "Les messages efficaces sont g\xE9n\xE9ralement compris entre 2 et 1000 caract\xE8res..." }
            }, null, _parent2, _scopeId));
            _push2(`<button${ssrIncludeBooleanAttr(state.loading) ? " disabled" : ""} class="bouton" data-v-6763d4fe${_scopeId}>${ssrInterpolate(state.loading ? "Envoi en cours..." : "Soumettre")}</button>`);
            if (state.error) {
              _push2(`<p class="text-red-500" data-v-6763d4fe${_scopeId}>${ssrInterpolate(state.error)}</p>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("h1", null, "Soumettre"),
              createVNode(_component_FormKit, {
                type: "text",
                label: "Quel est ton nom ?",
                "prefix-icon": "avatarMan",
                name: "nom",
                placeholder: "par exemple: Dupont",
                validation: "required | length:2,100 | alpha ",
                "validation-messages": { required: "Oups ! Je crois que tu as oubli\xE9 ton nom...", alpha: "Tu dois bien avoir un caract\xE8re bizarre quelque part...", length: "Les noms sont g\xE9n\xE9ralement compris entre 2 et 100 caract\xE8res..." }
              }, null, 8, ["validation-messages"]),
              createVNode(_component_FormKit, {
                type: "text",
                label: "Quel est ton Pr\xE9nom ?",
                "prefix-icon": "avatarMan",
                name: "pr\xE9nom",
                placeholder: "par exemple: Jean",
                validation: "required | alpha | length:2,100",
                "validation-messages": { required: "Oups ! Je crois que tu as oubli\xE9 ton pr\xE9nom...", alpha: "Tu dois bien avoir un caract\xE8re bizarre quelque part...", length: "Les pr\xE9noms sont g\xE9n\xE9ralement compris entre 2 et 100 caract\xE8res..." }
              }, null, 8, ["validation-messages"]),
              createVNode(_component_FormKit, {
                type: "email",
                label: "Quel est ton adresse mail ?",
                "prefix-icon": "email",
                name: "email",
                placeholder: "par exemple: jean.dupont@fournisseurmail.fr",
                validation: "required | email",
                "validation-messages": { required: "Oups ! Je crois que tu as oubli\xE9 ton adresse mail...", email: "Ton adresse mail ne semble pas valide..." }
              }, null, 8, ["validation-messages"]),
              createVNode(_component_FormKit, {
                type: "textarea",
                label: "Quel est ton message ?",
                name: "message",
                placeholder: "par exemple: Je vous contacte pour vous dire que votre site est super ! On le savait d\xE9j\xE0 mais c'est toujours bon \xE0 entendre !",
                validation: "required |alpha | lenght, 2, 1000",
                "validation-messages": { required: "Oups ! Je crois que tu as oubli\xE9 ton message...", alpha: "Tu dois bien avoir un caract\xE8re bizarre quelque part...", length: "Les messages efficaces sont g\xE9n\xE9ralement compris entre 2 et 1000 caract\xE8res..." }
              }, null, 8, ["validation-messages"]),
              createVNode("button", {
                disabled: state.loading,
                class: "bouton"
              }, toDisplayString(state.loading ? "Envoi en cours..." : "Soumettre"), 9, ["disabled"]),
              state.error ? (openBlock(), createBlock("p", {
                key: 0,
                class: "text-red-500"
              }, toDisplayString(state.error), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contactform.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6763d4fe"]]);
const _sfc_main = {
  name: "contact"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_contactform = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-c88553ae><p class="title" data-v-c88553ae>Bienvenue sur la page contact</p>`);
  _push(ssrRenderComponent(_component_contactform, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c88553ae"]]);

export { contact as default };
//# sourceMappingURL=contact-2d0d9d89.mjs.map
