import { _ as __nuxt_component_0 } from './nuxt-img-5d8bd53b.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-ae137144.mjs';
import { useSSRContext, ref, resolveComponent, withCtx, createTextVNode, createVNode, unref, toDisplayString } from 'vue';
import { w as wait } from './index-4412e52f.mjs';
import { ssrRenderComponent, ssrIncludeBooleanAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, F as FormKit } from '../server.mjs';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'h3';
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
  __name: "subscribe",
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
      const _component_P = resolveComponent("P");
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<!--[--><div class="wrapper" data-v-0f7a8feb><div class="subwrapper" data-v-0f7a8feb><h1 class="title" data-v-0f7a8feb>Notre processus d&#39;inscription</h1><p class="text" data-v-0f7a8feb>Avant d\u2019entamer un processus d&#39;admission, nous vous encourageons \xE0 en apprendre autant que possible sur notre p\xE9dagogie et notre philosophie.</p><p class="text" data-v-0f7a8feb>Vous pouvez consulter notre site internet, nous rencontrer lors d\u2019une r\xE9union d\u2019information ou d\u2019une visite de l\u2019\xE9cole, ou encore nous contacter par t\xE9l\xE9phone ou par mail.</p><p class="text" data-v-0f7a8feb>Nous vous invitons \xE9galement \xE0 regarder ces multiples ressources \xE0 lire et \xE0 visionner pour nourrir votre r\xE9flexion.</p></div><div class="subwrapper" data-v-0f7a8feb><h2 class="soustitre" data-v-0f7a8feb>Crit\xE8res d&#39;admission</h2>`);
      _push(ssrRenderComponent(_component_P, { class: "text" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`L\u2019\xE9cole accueille des enfants et adolescents de 5 \xE0 18 ans. Ils peuvent int\xE9grer l\u2019\xE9cole \xE0 tout moment de l\u2019ann\xE9e, \xE0 condition qu&#39;il reste de la place.`);
          } else {
            return [
              createTextVNode("L\u2019\xE9cole accueille des enfants et adolescents de 5 \xE0 18 ans. Ils peuvent int\xE9grer l\u2019\xE9cole \xE0 tout moment de l\u2019ann\xE9e, \xE0 condition qu'il reste de la place.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_P, { class: "text" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`L\u2019admission d\xE9finitive d\u2019un nouveau membre dans notre \xE9cole d\xE9pendra \xE9galement de son niveau d\u2019autonomie et de son aptitude \xE0 respecter notre r\xE8glement int\xE9rieur.`);
          } else {
            return [
              createTextVNode("L\u2019admission d\xE9finitive d\u2019un nouveau membre dans notre \xE9cole d\xE9pendra \xE9galement de son niveau d\u2019autonomie et de son aptitude \xE0 respecter notre r\xE8glement int\xE9rieur.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="subwrapper" data-v-0f7a8feb><h2 class="soustitre" data-v-0f7a8feb>Frais de scolarit\xE9</h2>`);
      _push(ssrRenderComponent(_component_P, { class: "text" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Toutes les informations sur les frais de scolarit\xE9 sont sur <span data-v-0f7a8feb${_scopeId}>`);
            _push2(ssrRenderComponent(_component_nuxt_link, {
              to: "/tarifs",
              class: "link"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Cette Page`);
                } else {
                  return [
                    createTextVNode("Cette Page")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</span>`);
          } else {
            return [
              createTextVNode("Toutes les informations sur les frais de scolarit\xE9 sont sur "),
              createVNode("span", null, [
                createVNode(_component_nuxt_link, {
                  to: "/tarifs",
                  class: "link"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Cette Page")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="subwrapper" data-v-0f7a8feb><h2 class="soustitre" data-v-0f7a8feb>Etapes d&#39;inscription</h2><ol class="wrapperlist" data-v-0f7a8feb><li class="itemlist" data-v-0f7a8feb>Prendre contact :</li><p class="text" data-v-0f7a8feb>Remplissez le formulaire ci-dessous, nous vous recontacterons par mail ou t\xE9l\xE9phone pour convenir d\u2019un premier \xE9change t\xE9l\xE9phonique. Vous pourrez \xE9galement nous faire part de votre besoin d\u2019une bourse lors de ce premier \xE9change.</p><li class="itemlist" data-v-0f7a8feb>Se rencontrer : </li>`);
      _push(ssrRenderComponent(_component_P, { class: "text" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Nous pourrons convenir d\u2019un entretien individuel qui vous permettra de d\xE9couvrir l&#39;\xE9quipe, le collectif, les locaux, et d&#39;approfondir l&#39;approche et le fonctionnement de l&#39;\xE9cole. `);
          } else {
            return [
              createTextVNode("Nous pourrons convenir d\u2019un entretien individuel qui vous permettra de d\xE9couvrir l'\xE9quipe, le collectif, les locaux, et d'approfondir l'approche et le fonctionnement de l'\xE9cole. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<li class="itemlist" data-v-0f7a8feb>Se d\xE9cider</li>`);
      _push(ssrRenderComponent(_component_P, { class: "text" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Si vous d\xE9cidez de poursuivre l&#39;aventure, nous vous proposerons un contrat d&#39;inscription. Vous pourrez alors nous faire parvenir les documents n\xE9cessaires \xE0 l&#39;inscription de votre enfant.`);
          } else {
            return [
              createTextVNode("Si vous d\xE9cidez de poursuivre l'aventure, nous vous proposerons un contrat d'inscription. Vous pourrez alors nous faire parvenir les documents n\xE9cessaires \xE0 l'inscription de votre enfant.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<li class="itemlist" data-v-0f7a8feb>S&#39;adapter</li>`);
      _push(ssrRenderComponent(_component_P, { class: "text" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`L\u2019int\xE9gration de votre enfant commence avec une p\xE9riode d\u2019adaptation de 2 semaines. Celle-ci lui permet de s\u2019assurer que l\u2019environnement propos\xE9 par l\u2019\xE9cole lui convient. Elle est \xE9galement l\u2019occasion pour le collectif de v\xE9rifier que le nouvel inscrit est suffisamment autonome et adh\xE8re au fonctionnement de l\u2019\xE9cole.`);
          } else {
            return [
              createTextVNode("L\u2019int\xE9gration de votre enfant commence avec une p\xE9riode d\u2019adaptation de 2 semaines. Celle-ci lui permet de s\u2019assurer que l\u2019environnement propos\xE9 par l\u2019\xE9cole lui convient. Elle est \xE9galement l\u2019occasion pour le collectif de v\xE9rifier que le nouvel inscrit est suffisamment autonome et adh\xE8re au fonctionnement de l\u2019\xE9cole.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<li class="text" data-v-0f7a8feb>Valider l&#39;int\xE9gration :</li>`);
      _push(ssrRenderComponent(_component_P, { class: "text" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Si l\u2019adaptation se passe bien, nous vous proposerons un contrat d\u2019inscription pour l\u2019ann\xE9e scolaire suivante.`);
          } else {
            return [
              createTextVNode("Si l\u2019adaptation se passe bien, nous vous proposerons un contrat d\u2019inscription pour l\u2019ann\xE9e scolaire suivante.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</ol></div>`);
      _push(ssrRenderComponent(_component_P, { class: "font-bold" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Nota bene : Au terme de la p\xE9riode d\u2019adaptation, si votre enfant et le collectif sont d\u2019accord, l\u2019inscription est consid\xE9r\xE9e comme d\xE9finitive. `);
          } else {
            return [
              createTextVNode("Nota bene : Au terme de la p\xE9riode d\u2019adaptation, si votre enfant et le collectif sont d\u2019accord, l\u2019inscription est consid\xE9r\xE9e comme d\xE9finitive. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="separator" data-v-0f7a8feb></div><h1 class="title" data-v-0f7a8feb>Formulaire d&#39;inscription</h1></div><div class="form" data-v-0f7a8feb>`);
      _push(ssrRenderComponent(unref(FormKit), {
        type: "form",
        "submit-label": "Soumettre",
        value: unref(formData),
        actions: false,
        onSubmit: handleSubmit
      }, {
        default: withCtx(({ state }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(FormKit), {
              type: "text",
              label: "Quel est ton nom ?",
              "prefix-icon": "avatarMan",
              name: "nom",
              placeholder: "par exemple: Dupont",
              validation: "required | length:2,100 | alpha ",
              "validation-messages": { required: "Oups ! Je crois que tu as oubli\xE9 ton nom...", alpha: "Tu dois bien avoir un caract\xE8re bizarre quelque part...", length: "Les noms sont g\xE9n\xE9ralement compris entre 2 et 100 caract\xE8res..." }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(FormKit), {
              type: "text",
              label: "Quel est ton Pr\xE9nom ?",
              "prefix-icon": "avatarMan",
              name: "pr\xE9nom",
              placeholder: "par exemple: Jean",
              validation: "required | alpha | length:2,100",
              "validation-messages": { required: "Oups ! Je crois que tu as oubli\xE9 ton pr\xE9nom...", alpha: "Tu dois bien avoir un caract\xE8re bizarre quelque part...", length: "Les pr\xE9noms sont g\xE9n\xE9ralement compris entre 2 et 100 caract\xE8res..." }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(FormKit), {
              type: "email",
              label: "Quel est ton adresse mail ?",
              "prefix-icon": "email",
              name: "email",
              placeholder: "par exemple: jean.dupont@fournisseurmail.fr",
              validation: "required | email",
              "validation-messages": { required: "Oups ! Je crois que tu as oubli\xE9 ton adresse mail...", email: "Ton adresse mail ne semble pas valide..." }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(FormKit), {
              type: "tel",
              label: "Quel est ton num\xE9ro de t\xE9l\xE9phone ?",
              "prefix-icon": "telephone",
              name: "phone",
              placeholder: "par exemple: 06 12 34 56 78",
              validation: "required |matches:/^(?:(?:\\+|00)33[\\s.-]{0,3}(?:\\(0\\)[\\s.-]{0,3})?|0)[1-9](?:(?:[\\s.-]?\\d{2}){4}|\\d{2}(?:[\\s.-]?\\d{3}){2})$/",
              "validation-messages": { required: "Oups ! Je crois que tu as oubli\xE9 ton num\xE9ro de t\xE9l\xE9phone...", number: "Il n'y a g\xE9n\xE9ralement pas de lettres dans un num\xE9ro de t\xE9l\xE9phone...", matches: "Ton num\xE9ro de t\xE9l\xE9phone ne semble pas valide..." }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(FormKit), {
              Type: "text",
              label: "Quel est le nom de ton enfant ?",
              "prefix-icon": "avatarMan",
              name: "nomenfant",
              placeholder: "par exemple: Dupont",
              validation: "required | length:2,100 | alpha ",
              "valdation-messages": { required: "Oups ! Je crois que tu as oubli\xE9 le nom de ton enfant...", alpha: "Tu dois bien avoir un caract\xE8re bizarre quelque part...", length: "Les noms sont g\xE9n\xE9ralement compris entre 2 et 100 caract\xE8res..." }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(FormKit), {
              Type: "text",
              label: "Quel est le pr\xE9nom de ton enfant ?",
              "prefix-icon": "avatarMan",
              name: "prenomenfant",
              placeholder: "par exemple: Jacques",
              validation: "required | length:2,100 | alpha ",
              "valdation-messages": { required: "Oups ! Je crois que tu as oubli\xE9 le pr\xE9nom de ton enfant...", alpha: "Tu dois bien avoir un caract\xE8re bizarre quelque part...", length: "Les noms sont g\xE9n\xE9ralement compris entre 2 et 100 caract\xE8res..." }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(FormKit), {
              Type: "date",
              label: "Quel est sa date de naissance ?",
              "prefix-icon": "avatarMan",
              name: "datenaissance",
              placeholder: "par exemple: 10/12/2017",
              validation: "required ",
              "valdation-messages": { required: "Oups ! Je crois que tu as oubli\xE9 la date de naissance de ton enfant..." }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(FormKit), {
              Type: "date",
              label: "Quelle serait la date d'admission souhait\xE9e ?",
              "prefix-icon": "time",
              name: "dateadmission",
              placeholder: "par exemple: 10/09/2024",
              validation: "required | date_after:today ",
              "valdation-messages": { required: "Oups ! C'est important de savoir quand tu souhaites que ton enfant int\xE8gre l'\xE9cole...", date_after: "Il n'est pas possible de pr\xE9inscrire les enfants par anticipation..." }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(FormKit), {
              type: "textarea",
              label: "As-tu d'autres informations \xE0 nous communiquer ?",
              name: "message",
              "prefix-icon": "textarea",
              placeholder: "par exemple: Votre \xE9cole est vraiment super (bon c'est un exemple...) !",
              validation: "required |alpha | lenght, 2, 1000",
              "validation-messages": { required: "Oups ! Je crois que tu as oubli\xE9 ton message...", alpha: "Tu dois bien avoir un caract\xE8re bizarre quelque part...", length: "Les messages efficaces sont g\xE9n\xE9ralement compris entre 2 et 1000 caract\xE8res..." }
            }, null, _parent2, _scopeId));
            _push2(`<button class="bouton"${ssrIncludeBooleanAttr(state.loading) ? " disabled" : ""} data-v-0f7a8feb${_scopeId}>${ssrInterpolate(state.loading ? "Envoi en cours..." : "Soumettre")}</button>`);
          } else {
            return [
              createVNode(unref(FormKit), {
                type: "text",
                label: "Quel est ton nom ?",
                "prefix-icon": "avatarMan",
                name: "nom",
                placeholder: "par exemple: Dupont",
                validation: "required | length:2,100 | alpha ",
                "validation-messages": { required: "Oups ! Je crois que tu as oubli\xE9 ton nom...", alpha: "Tu dois bien avoir un caract\xE8re bizarre quelque part...", length: "Les noms sont g\xE9n\xE9ralement compris entre 2 et 100 caract\xE8res..." }
              }, null, 8, ["validation-messages"]),
              createVNode(unref(FormKit), {
                type: "text",
                label: "Quel est ton Pr\xE9nom ?",
                "prefix-icon": "avatarMan",
                name: "pr\xE9nom",
                placeholder: "par exemple: Jean",
                validation: "required | alpha | length:2,100",
                "validation-messages": { required: "Oups ! Je crois que tu as oubli\xE9 ton pr\xE9nom...", alpha: "Tu dois bien avoir un caract\xE8re bizarre quelque part...", length: "Les pr\xE9noms sont g\xE9n\xE9ralement compris entre 2 et 100 caract\xE8res..." }
              }, null, 8, ["validation-messages"]),
              createVNode(unref(FormKit), {
                type: "email",
                label: "Quel est ton adresse mail ?",
                "prefix-icon": "email",
                name: "email",
                placeholder: "par exemple: jean.dupont@fournisseurmail.fr",
                validation: "required | email",
                "validation-messages": { required: "Oups ! Je crois que tu as oubli\xE9 ton adresse mail...", email: "Ton adresse mail ne semble pas valide..." }
              }, null, 8, ["validation-messages"]),
              createVNode(unref(FormKit), {
                type: "tel",
                label: "Quel est ton num\xE9ro de t\xE9l\xE9phone ?",
                "prefix-icon": "telephone",
                name: "phone",
                placeholder: "par exemple: 06 12 34 56 78",
                validation: "required |matches:/^(?:(?:\\+|00)33[\\s.-]{0,3}(?:\\(0\\)[\\s.-]{0,3})?|0)[1-9](?:(?:[\\s.-]?\\d{2}){4}|\\d{2}(?:[\\s.-]?\\d{3}){2})$/",
                "validation-messages": { required: "Oups ! Je crois que tu as oubli\xE9 ton num\xE9ro de t\xE9l\xE9phone...", number: "Il n'y a g\xE9n\xE9ralement pas de lettres dans un num\xE9ro de t\xE9l\xE9phone...", matches: "Ton num\xE9ro de t\xE9l\xE9phone ne semble pas valide..." }
              }, null, 8, ["validation-messages"]),
              createVNode(unref(FormKit), {
                Type: "text",
                label: "Quel est le nom de ton enfant ?",
                "prefix-icon": "avatarMan",
                name: "nomenfant",
                placeholder: "par exemple: Dupont",
                validation: "required | length:2,100 | alpha ",
                "valdation-messages": { required: "Oups ! Je crois que tu as oubli\xE9 le nom de ton enfant...", alpha: "Tu dois bien avoir un caract\xE8re bizarre quelque part...", length: "Les noms sont g\xE9n\xE9ralement compris entre 2 et 100 caract\xE8res..." }
              }, null, 8, ["valdation-messages"]),
              createVNode(unref(FormKit), {
                Type: "text",
                label: "Quel est le pr\xE9nom de ton enfant ?",
                "prefix-icon": "avatarMan",
                name: "prenomenfant",
                placeholder: "par exemple: Jacques",
                validation: "required | length:2,100 | alpha ",
                "valdation-messages": { required: "Oups ! Je crois que tu as oubli\xE9 le pr\xE9nom de ton enfant...", alpha: "Tu dois bien avoir un caract\xE8re bizarre quelque part...", length: "Les noms sont g\xE9n\xE9ralement compris entre 2 et 100 caract\xE8res..." }
              }, null, 8, ["valdation-messages"]),
              createVNode(unref(FormKit), {
                Type: "date",
                label: "Quel est sa date de naissance ?",
                "prefix-icon": "avatarMan",
                name: "datenaissance",
                placeholder: "par exemple: 10/12/2017",
                validation: "required ",
                "valdation-messages": { required: "Oups ! Je crois que tu as oubli\xE9 la date de naissance de ton enfant..." }
              }, null, 8, ["valdation-messages"]),
              createVNode(unref(FormKit), {
                Type: "date",
                label: "Quelle serait la date d'admission souhait\xE9e ?",
                "prefix-icon": "time",
                name: "dateadmission",
                placeholder: "par exemple: 10/09/2024",
                validation: "required | date_after:today ",
                "valdation-messages": { required: "Oups ! C'est important de savoir quand tu souhaites que ton enfant int\xE8gre l'\xE9cole...", date_after: "Il n'est pas possible de pr\xE9inscrire les enfants par anticipation..." }
              }, null, 8, ["valdation-messages"]),
              createVNode(unref(FormKit), {
                type: "textarea",
                label: "As-tu d'autres informations \xE0 nous communiquer ?",
                name: "message",
                "prefix-icon": "textarea",
                placeholder: "par exemple: Votre \xE9cole est vraiment super (bon c'est un exemple...) !",
                validation: "required |alpha | lenght, 2, 1000",
                "validation-messages": { required: "Oups ! Je crois que tu as oubli\xE9 ton message...", alpha: "Tu dois bien avoir un caract\xE8re bizarre quelque part...", length: "Les messages efficaces sont g\xE9n\xE9ralement compris entre 2 et 1000 caract\xE8res..." }
              }, null, 8, ["validation-messages"]),
              createVNode("button", {
                class: "bouton",
                disabled: state.loading
              }, toDisplayString(state.loading ? "Envoi en cours..." : "Soumettre"), 9, ["disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/subscribe.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0f7a8feb"]]);
const _sfc_main = {
  name: "inscription"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_img = __nuxt_component_0;
  const _component_Subscribe = __nuxt_component_1;
  _push(`<!--[--><div class="wrapper" data-v-a149b93b></div>`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    src: "./slider3.jpg",
    alt: "notfound",
    class: "imagefond",
    height: "400"
  }, null, _parent));
  _push(`<div class="postitle" data-v-a149b93b><div class="overlay" data-v-a149b93b><h1 class="title" data-v-a149b93b>Merci de votre int\xE9r\xEAt pour l&#39;\xE9cole La Montgolfi\xE8re</h1><p class="subtitle" data-v-a149b93b>L&#39;\xE9cole o\xF9 nous \xE9levons ensemble</p></div></div>`);
  _push(ssrRenderComponent(_component_Subscribe, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/inscription.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const inscription = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a149b93b"]]);

export { inscription as default };
//# sourceMappingURL=inscription-71149ad0.mjs.map
