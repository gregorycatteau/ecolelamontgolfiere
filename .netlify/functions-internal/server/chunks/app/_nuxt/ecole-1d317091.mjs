import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { useSSRContext, defineComponent, ref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import __nuxt_component_0$1 from './Icon-45006cd4.mjs';
import { _ as __nuxt_component_7 } from './faq-36ee7820.mjs';
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
import './config-f1d4f57c.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';

const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  name: "HomePage",
  data() {
    return {
      sliderImages: [
        {
          id: 1,
          src: "@/public/slider4.jpg",
          name: "slider4",
          type: "image",
          required: true
        },
        {
          id: 2,
          src: "@/public/slider5.jpg",
          name: "slider5",
          type: "image",
          required: true
        },
        {
          id: 3,
          src: "@/public/slider6.jpg",
          name: "slider6",
          type: "image",
          required: true
        }
      ]
    };
  },
  setup() {
    const sliderImages = ref([4, 5, 6]);
    const changeSlider = () => {
      let currentImage = sliderImages.value.shift();
      if (currentImage === void 0) {
        currentImage = sliderImages.value[0];
      }
      sliderImages.value.push(currentImage === 6 ? 4 : currentImage + 1);
    };
    setInterval(changeSlider, 3e3);
    return {
      sliderImages
    };
  }
});
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-40e43fbc><div data-v-40e43fbc><h1 class="title" data-v-40e43fbc>Un environnement adapt\xE9 et \xE9volutif</h1></div><div class="columns" data-v-40e43fbc><div class="column1" data-v-40e43fbc><div class="slider-container" data-v-40e43fbc><!--[-->`);
  ssrRenderList(_ctx.sliderImages, (image, index) => {
    _push(`<img${ssrRenderAttr("src", `/slider${image}.jpg`)} class="slider-image" alt="Not found"${ssrRenderAttr("width", 600)}${ssrRenderAttr("height", 400)} data-v-40e43fbc>`);
  });
  _push(`<!--]--></div></div><div class="column2" data-v-40e43fbc><p class="text" data-v-40e43fbc>L\u2019\xE9cole s\u2019appuie sur un environnement suffisamment riche et stimulant qui permet \xE0 chacun de ses membres de satisfaire ses envies et ses besoins naturels d\u2019apprendre.</p><h1 class="title" data-v-40e43fbc>Un collectif multi \xE2ges</h1><p class="text" data-v-40e43fbc>L&#39;\xE9cole est le lieu de vie des enfants et des adultes qui les accompagnent. Si nous souhaitons que nos enfants fassent preuve d&#39;initiatives, s&#39;engagent et se responsabilisent \xE0 diff\xE9rents endroits de leur vie, il est int\xE9ressant de leur laisser de r\xE9elles opportunit\xE9s d&#39;agir sur leur monde : ici, organiser leur vie \xE0 l&#39;\xE9cole.</p><p class="text" data-v-40e43fbc>C&#39;est un groupe vertueux qui se cr\xE9e. Dans ce cadre protecteur, les plus jeunes peuvent apprendre des plus grands et vice versa.</p></div></div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/environnement.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8], ["__scopeId", "data-v-40e43fbc"]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div class="wrapper" data-v-199a8b77><div class="intwrapper" data-v-199a8b77><h2 class="title" data-v-199a8b77>La montgolfi\xE8re est un \xE9tablissement scolaire situ\xE9 dans le nord m\xE9doc</h2><p class="text" data-v-199a8b77>L&#39;\xE9cole a pour but d&#39;avoir une structure \xE9ducative adapt\xE9e \xE0 chaque enfant avec comme valeur premi\xE8re </p><p class="text" data-v-199a8b77>de le valoriser et l&#39;encourager tout en le guidant \xE0 identifier et comprendre ses \xE9motions.</p><p class="text" data-v-199a8b77>Nous accueillons les enfants de 2 \xE0 16 ans</p></div></div><div class="intwrapper" data-v-199a8b77><p class="texte" data-v-199a8b77>Ce lieu d\u2019\xE9panouissement est rendu possible gr\xE2ce \xE0 la mise en application de nos valeurs fondatrices :</p></div><!--]-->`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/generalites.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7], ["__scopeId", "data-v-199a8b77"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  name: "HomePage",
  data() {
    return {
      sliderImages: [
        {
          id: 1,
          src: "@/public/slider7.jpg",
          name: "slider7",
          type: "image",
          required: true
        },
        {
          id: 2,
          src: "@/public/slider8.jpg",
          name: "slider8",
          type: "image",
          required: true
        },
        {
          id: 3,
          src: "@/public/slider9.jpg",
          name: "slider9",
          type: "image",
          required: true
        }
      ]
    };
  },
  setup() {
    const sliderImages = ref([7, 8, 9]);
    const changeSlider = () => {
      let currentImage = sliderImages.value.shift();
      if (currentImage === void 0) {
        currentImage = sliderImages.value[0];
      }
      sliderImages.value.push(currentImage === 9 ? 7 : currentImage + 1);
    };
    setInterval(changeSlider, 3e3);
    return {
      sliderImages
    };
  }
});
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-ad0ebee2><div data-v-ad0ebee2><h1 class="title" data-v-ad0ebee2>Des locaux et un environnement mat\xE9riel adapt\xE9s</h1></div><div class="columns" data-v-ad0ebee2><div class="column1" data-v-ad0ebee2><p class="textlist" data-v-ad0ebee2>Les locaux que nous recherchons ne ressemblent pas \xE0 une \xE9cole classique. La Montgolfi\xE8re ressemblera \xE0 une grande maison, on y trouvera : </p><ul class="listwrap" data-v-ad0ebee2><li class="listitem" data-v-ad0ebee2>une salle tr\xE8s calme : on ne peut pas y parler, elle est utile pour travailler seul o\xF9 se reposer</li><li class="listitem" data-v-ad0ebee2>une salle calme : on peut parler doucement, on peut ainsi y travailler \xE0 plusieurs</li><li class="listitem" data-v-ad0ebee2>un atelier : avec un acc\xE8s \xE0 l\u2019eau, qui permet de r\xE9aliser de nombres activit\xE9s manuelles et cr\xE9atives (dessin, peinture, poterie, couture\u2026) et un espace d\u2019exp\xE9riences scientifiques</li><li class="listitem" data-v-ad0ebee2>une salle jeu : avec de nombreux jeux de construction (l\xE9gos, kaplas\u2026) et dinettes\u2026</li><li class="listitem" data-v-ad0ebee2>une cuisine \xE9quip\xE9e</li><li class="listitem" data-v-ad0ebee2>un grand salon : avec canap\xE9s et tables pour manger ainsi qu\u2019un babyfoot</li><li class="listitem" data-v-ad0ebee2>un petit salon : un espace cosy pour se poser, discuter, r\xEAver, jouer\u2026</li><li class="listitem" data-v-ad0ebee2>une salle musique et cin\xE9ma : r\xE9servable pour visionner un film \xE0 plusieurs, et o\xF9 on peut \xE9galement d\xE9couvrir la musique gr\xE2ce \xE0 un clavier, des guitares, une batterie\u2026</li><li class="listitem" data-v-ad0ebee2>une m\xE9diath\xE8que : on y trouve des ordinateurs, des livres et de nombreux jeux de soci\xE9t\xE9</li><li class="listitem" data-v-ad0ebee2>une salle de sport : avec un mur d\u2019escalade, des halt\xE8res, des tapis de sol, des ballons\u2026</li></ul><p class="textlist" data-v-ad0ebee2>L\u2019am\xE9nagement des locaux, les ressources mat\xE9rielles et humaines permettent l\u2019alternance de phases de travail personnel et de phases collectives et concourent \xE0 une approche syst\xE9mique des apprentissages.</p></div><div class="column2" data-v-ad0ebee2><div class="slider-container" data-v-ad0ebee2><!--[-->`);
  ssrRenderList(_ctx.sliderImages, (image, index) => {
    _push(`<img${ssrRenderAttr("src", `/slider${image}.jpg`)} class="slider-image" alt="Not found"${ssrRenderAttr("width", 600)}${ssrRenderAttr("height", 400)} data-v-ad0ebee2>`);
  });
  _push(`<!--]--></div></div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/locaux.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-ad0ebee2"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  name: "HomePage",
  data() {
    return {
      sliderImages: [
        {
          id: 1,
          src: "@/public/slider1.jpg",
          name: "slider1",
          type: "image",
          required: true
        },
        {
          id: 2,
          src: "@/public/slider2.jpg",
          name: "slider2",
          type: "image",
          required: true
        },
        {
          id: 3,
          src: "@/public/slider3.jpg",
          name: "slider3",
          type: "image",
          required: true
        }
      ]
    };
  },
  setup() {
    const sliderImages = ref([1, 2, 3]);
    const changeSlider = () => {
      let currentImage = sliderImages.value.shift();
      if (currentImage === void 0) {
        currentImage = sliderImages.value[0];
      }
      sliderImages.value.push(currentImage === 3 ? 1 : currentImage + 1);
    };
    setInterval(changeSlider, 3e3);
    return {
      sliderImages
    };
  }
});
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-d0c909b1><div data-v-d0c909b1><h1 class="maintitle" data-v-d0c909b1>Notre projet p\xE9dagogique</h1></div><div class="columns" data-v-d0c909b1><div class="column1" data-v-d0c909b1><h1 class="title" data-v-d0c909b1>Le Vivre Ensemble</h1><p class="text" data-v-d0c909b1>Par vivre-ensemble nous entendons la coop\xE9ration, la solidarit\xE9, le partage, la paix, ... Cet apprentissage du &quot;vivre-ensemble&quot; regroupe notamment les comp\xE9tences psychosociales suivantes : \xE9coute, confiance en soi, connaissance et respect de soi, respect de l&#39;autre, empathie, capacit\xE9 \xE0 coop\xE9rer, familiarisation \xE0 la gestion de conflits, recours \xE0 l&#39;intelligence \xE9motionnelle... Pour favoriser le d\xE9veloppement de ces comp\xE9tences, les pratiques se centrent autour du fonctionnement multi-\xE2ges, de l&#39;auto-organisation, de la coop\xE9ration, de l&#39;accompagnement des \xE9motions et de la conscience de soi. Ces pratiques se mettent notamment en place dans le cadre des r\xE8gles de vie qui sont \xE9labor\xE9es en concertation avec le groupe d&#39;enfants et l&#39;ensemble de la communaut\xE9 p\xE9dagogique, sur des temps d\xE9di\xE9s. Elles peuvent \xEAtre amen\xE9es \xE0 \xE9voluer en fonction des besoins rencontr\xE9s au quotidien. Elles ont pour but de proposer un cadre s\xE9curisant et indispensable, \xE0 l&#39;int\xE9rieur duquel chacun, enfant comme adulte, se sent libre d&#39;agir et de penser dans le respect des autres.</p></div><div class="column2" data-v-d0c909b1><div class="slider-container" data-v-d0c909b1><!--[-->`);
  ssrRenderList(_ctx.sliderImages, (image, index) => {
    _push(`<img${ssrRenderAttr("src", `/slider${image}.jpg`)} class="slider-image" alt="Not found"${ssrRenderAttr("width", 600)}${ssrRenderAttr("height", 400)} data-v-d0c909b1>`);
  });
  _push(`<!--]--></div></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/projetpedagogique.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-d0c909b1"]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-5 mt-10" }, _attrs))}></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/separator.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  name: "HomePage",
  data() {
    return {
      sliderImages: [
        {
          id: 1,
          src: "@/public/slider10.jpg",
          name: "slider10",
          type: "image",
          required: true
        },
        {
          id: 2,
          src: "@/public/slider11.jpg",
          name: "slider11",
          type: "image",
          required: true
        },
        {
          id: 3,
          src: "@/public/slider12.jpg",
          name: "slider12",
          type: "image",
          required: true
        }
      ]
    };
  },
  setup() {
    const sliderImages = ref([10, 11, 12]);
    const changeSlider = () => {
      let currentImage = sliderImages.value.shift();
      if (currentImage === void 0) {
        currentImage = sliderImages.value[0];
      }
      sliderImages.value.push(currentImage === 12 ? 10 : currentImage + 1);
    };
    setInterval(changeSlider, 3e3);
    return {
      sliderImages
    };
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-57624301><div data-v-57624301><h1 class="title" data-v-57624301>Des sorties vari\xE9es</h1></div><div class="columns" data-v-57624301><div class="column1" data-v-57624301><p class="text" data-v-57624301>Les murs de cette \xE9cole sont perm\xE9ables, car l&#39;on y vit aussi bien en dedans qu&#39;au dehors. </p><h1 class="title" data-v-57624301>A chaque \xE2ge ses sorties</h1><p class="text" data-v-57624301>Souvent, une sortie initi\xE9e par un ou quelques membres est propos\xE9e \xE0 l\u2019ensemble du collectif. Nous sortons ainsi tr\xE8s r\xE9guli\xE8rement, que ce soit simplement pour jouer \xE0 l\u2019air libre dans les parcs alentours, sur un terrain de sport, \xE0 la piscine, \xE0 la patinoire, pour jardiner au jardin partag\xE9, pour visiter un mus\xE9e\u2026</p></div><div class="column2" data-v-57624301><div class="slider-container" data-v-57624301><!--[-->`);
  ssrRenderList(_ctx.sliderImages, (image, index) => {
    _push(`<img${ssrRenderAttr("src", `/slider${image}.jpg`)} class="slider-image" alt="Not found"${ssrRenderAttr("width", 600)}${ssrRenderAttr("height", 400)} data-v-57624301>`);
  });
  _push(`<!--]--></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sorties.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-57624301"]]);
const _sfc_main$2 = {
  data() {
    return {
      darkMode: false
    };
  },
  methods: {
    toggleDarkMode() {
      document.documentElement.classList.toggle("dark");
      this.darkMode = !this.darkMode;
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0$1;
  _push(`<label${ssrRenderAttrs(mergeProps({ class: "switch" }, _attrs))} data-v-41ca7656><input class="switch__input" type="checkbox" role="switch"${ssrIncludeBooleanAttr(Array.isArray($data.darkMode) ? ssrLooseContain($data.darkMode, null) : $data.darkMode) ? " checked" : ""} data-v-41ca7656>`);
  if (!$data.darkMode) {
    _push(ssrRenderComponent(_component_Icon, {
      class: "switch__icon switch__icon--light",
      name: "line-md:sunny-outline-twotone-loop"
    }, null, _parent));
  } else {
    _push(ssrRenderComponent(_component_Icon, {
      class: "switch__icon switch__icon--dark",
      name: "line-md:sunny-filled-loop-to-moon-alt-filled-loop-transition"
    }, null, _parent));
  }
  _push(`</label>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/togglingbutton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-41ca7656"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_Icon = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapping" }, _attrs))} data-v-58d6ce4b><h1 class="maintitle" data-v-58d6ce4b>Les valeurs que nous d\xE9fendons</h1><div class="herowrapper" data-v-58d6ce4b><div class="cardwrapper" data-v-58d6ce4b>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "fxemoji:school",
    class: "iconed"
  }, null, _parent));
  _push(`<h2 class="sectiontitle" data-v-58d6ce4b>Libert\xE9 </h2><p class="text" data-v-58d6ce4b>Pour nous, les humains sont naturellement curieux et apprenants ! Surtout s&#39;ils peuvent explorer leur propre motivation et prendre leur temps. A l&#39;Ecole D\xE9mocratique de Paris, chacun peut choisir librement ses activit\xE9s, avancer \xE0 son rythme, en d\xE9finissant ses propres objectifs... tout en prenant soin de respecter la libert\xE9 des autres !</p></div><div class="cardwrapper" data-v-58d6ce4b>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "fluent-emoji-flat:statue-of-liberty",
    class: "iconed"
  }, null, _parent));
  _push(`<h2 class="sectiontitle" data-v-58d6ce4b>Equit\xE9</h2><p class="text" data-v-58d6ce4b>L\u2019\xE9cole est r\xE9gie par le principe d\u2019\xE9galit\xE9 de droits entre individus, ind\xE9pendamment de leur \xE2ge. Tout le monde peut participer aux d\xE9bats et d\xE9cisions concernant la vie de l\u2019\xE9cole sur la base de \xAB 1 personne = 1 voix \xBB. Ainsi, adultes et enfants \xE9voluent dans le m\xEAme cadre, et travaillent ensemble \xE0 l&#39;\xE9volution et au respect du r\xE8glement int\xE9rieur.</p></div><div class="cardwrapper" data-v-58d6ce4b>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "noto-v1:handshake-medium-dark-skin-tone",
    class: "iconed"
  }, null, _parent));
  _push(`<p class="sectiontitle" data-v-58d6ce4b>Solidarit\xE9</p><p class="text" data-v-58d6ce4b>Lib\xE9r\xE9e des contraintes de la comp\xE9tition et de la hi\xE9rarchie, anim\xE9e par des valeurs de bienveillance et de respect, l\u2019\xE9cole est un terreau id\xE9al pour la construction de liens authentiques : la rencontre des \xE2ges cr\xE9e une multitude d\u2019interactions, sources pr\xE9cieuses d\u2019apprentissages.</p></div></div><h1 class="mainlink" data-v-58d6ce4b>Consultez notre charte des valeurs</h1></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/valeurs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-58d6ce4b"]]);
const _imports_0 = "" + buildAssetsURL("slider1.c476f6ac.jpg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Separator = __nuxt_component_0;
  const _component_Generalites = __nuxt_component_1;
  const _component_valeurs = __nuxt_component_2;
  const _component_Projetpedagogique = __nuxt_component_3;
  const _component_Environnement = __nuxt_component_4;
  const _component_locaux = __nuxt_component_5;
  const _component_Sorties = __nuxt_component_6;
  const _component_Faq = __nuxt_component_7;
  const _component_Togglingbutton = __nuxt_component_8;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapperingall" }, _attrs))} data-v-2de4cde6>`);
  _push(ssrRenderComponent(_component_Separator, null, null, _parent));
  _push(`<div class="wrapperimg" data-v-2de4cde6><img${ssrRenderAttr("src", _imports_0)} alt="notfound" class="imagefond" data-v-2de4cde6></div>`);
  _push(ssrRenderComponent(_component_Separator, null, null, _parent));
  _push(`<div class="suite" data-v-2de4cde6>`);
  _push(ssrRenderComponent(_component_Generalites, null, null, _parent));
  _push(ssrRenderComponent(_component_Separator, null, null, _parent));
  _push(ssrRenderComponent(_component_valeurs, null, null, _parent));
  _push(ssrRenderComponent(_component_Separator, null, null, _parent));
  _push(ssrRenderComponent(_component_Projetpedagogique, null, null, _parent));
  _push(ssrRenderComponent(_component_Separator, null, null, _parent));
  _push(ssrRenderComponent(_component_Environnement, null, null, _parent));
  _push(ssrRenderComponent(_component_Separator, null, null, _parent));
  _push(ssrRenderComponent(_component_locaux, null, null, _parent));
  _push(ssrRenderComponent(_component_Separator, null, null, _parent));
  _push(ssrRenderComponent(_component_Sorties, null, null, _parent));
  _push(ssrRenderComponent(_component_Separator, null, null, _parent));
  _push(ssrRenderComponent(_component_Faq, null, null, _parent));
  _push(ssrRenderComponent(_component_Separator, null, null, _parent));
  _push(ssrRenderComponent(_component_Togglingbutton, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ecole.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ecole = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2de4cde6"]]);

export { ecole as default };
//# sourceMappingURL=ecole-1d317091.mjs.map
