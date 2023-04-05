import { _ as __nuxt_component_0 } from './nuxt-img-5d8bd53b.mjs';
import { useSSRContext, defineComponent, ref, mergeProps } from 'vue';
import { _ as _export_sfc } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import __nuxt_component_0$1 from './Icon-cf4d68fe.mjs';
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
import './config-f1d4f57c.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';

const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  name: "HomePage",
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
  const _component_nuxt_img = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-d707f793><div class="columns" data-v-d707f793><div class="column" data-v-d707f793><div class="internal" data-v-d707f793><h1 class="title" data-v-d707f793>Un environnement adapt\xE9 et \xE9volutif</h1><p class="text" data-v-d707f793>L\u2019\xE9cole s\u2019appuie sur un environnement suffisamment riche et stimulant qui permet \xE0 chacun de ses membres de satisfaire ses envies et ses besoins naturels d\u2019apprendre.</p></div><div class="internal" data-v-d707f793><h1 class="title" data-v-d707f793>Un collectif multi \xE2ges</h1><p class="text" data-v-d707f793>L\u2019un des fondements de notre approche est le d\xE9cloisonnement des classes d\u2019\xE2ges. Dans notre \xE9cole, les membres entre 5 et 99 ans (une quarantaine de membre scolaris\xE9s et entre 4 et 6 adultes pr\xE9sents au quotidien) partagent le m\xEAme espace. Cela multiplie les interactions possibles, sources pr\xE9cieuses d\u2019apprentissages.</p><p class="text" data-v-d707f793>C&#39;est un groupe vertueux qui se cr\xE9e. Dans ce cadre protecteur, les plus jeunes peuvent apprendre des plus grands et vice versa.</p></div></div><div class="column" data-v-d707f793><div class="slider-container" data-v-d707f793><!--[-->`);
  ssrRenderList(_ctx.sliderImages, (image, index) => {
    _push(ssrRenderComponent(_component_nuxt_img, {
      key: index,
      src: `/slider${image}.jpg`,
      class: "slider-image",
      alt: "Not found",
      width: 600,
      height: 400
    }, null, _parent));
  });
  _push(`<!--]--></div></div></div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/environnement.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8], ["__scopeId", "data-v-d707f793"]]);
const _sfc_main$7 = {
  data() {
    return {
      faqList: [
        {
          question: "Comment les enfants peuvent-ils apprendre sans contrainte ?",
          answer: [
            "Notre p\xE9dagogie repose sur une conviction qui devrait \xEAtre une \xE9vidence, mais que deux si\xE8cles d\u2019\xE9cole traditionnelle ont fini par faire oublier : nous sommes tous des \xEAtres naturellement apprenants !",
            "Entre sa naissance et l\u2019\xE2ge de trois ans, l\u2019enfant acquiert une quantit\xE9 exceptionnelle de savoirs et de comp\xE9tences. Ainsi, il apprend \xE0 marcher, \xE0 manger, \xE0 \xE9changer et partager avec les autres\u2026 D\u2019ores et d\xE9j\xE0, il s\u2019ins\xE8re dans le monde social et se dote des instruments qui lui permettront de vivre en soci\xE9t\xE9, et ce sans avoir besoin ni de programme, ni de professeur impos\xE9, ni d\u2019\xE9valuation ! Au sein des \xE9coles d\xE9mocratiques, le postulat est qu\u2019il n\u2019y a pas de raison fondamentale que le processus d\u2019apprentissage change de forme \xE0 partir de l\u2019\xE2ge de 3 ans. Un enfant qui apprend \xE0 ma\xEEtriser la syntaxe et la conjugaison tout seul est tout \xE0 fait capable d\u2019apprendre \xE0 lire, \xE9crire, compter mais \xE9galement \xE0 faire de la biologie, du th\xE9\xE2tre ou du jardinage\u2026 sans activit\xE9s impos\xE9es !",
            "Dans notre \xE9cole, les apprentissages se font ainsi de mani\xE8re formelle (cours, ateliers, projets \u2026) ou informelle (jeu, conversations, sorties, activit\xE9s du quotidien \u2026) ! ",
            "Par ailleurs, les membres de l\u2019\xE9cole b\xE9n\xE9ficient de l\u2019accompagnement d\u2019une \xE9quipe p\xE9dagogique bienveillante et exp\xE9riment\xE9e, qui leur propose des temps d\u2019apprentissage structur\xE9s leur permettant de progresser sur les savoirs fondamentaux. Ces temps seront \xE9galement l\u2019occasion de pr\xE9parer des examens nationaux ou de b\xE2tir des projets personnalis\xE9s. Non obligatoires, ces temps d\u2019apprentissage s\u2019inspirent des apports p\xE9dagogiques d\u2019intellectuels aussi importants que C\xE9lestin Freinet, Paulo Freire ou encore Olivier Decroly.",
            "En r\xE9sum\xE9, \xE0 l\u2019Ecole D\xE9mocratique de Paris, les apprentissages sont auto-dirig\xE9s : les modalit\xE9s de l\u2019apprentissage (quoi, quand, comment, avec qui ?) sont fix\xE9es par l\u2019apprenant.",
            "Pour approfondir, nous vous invitons \xE0 visionner le film documentaire \xCAtre et Devenir et consulter notre page de Ressources \xE0 visionner et lire."
          ]
        },
        {
          question: "Mon enfant ne risque-t-il pas de passer \xE0 c\xF4t\xE9 d\u2019une infinit\xE9 de savoirs ?",
          answer: [
            "L\u2019honn\xEAtet\xE9 nous oblige \xE0 le dire : les enfants de l\u2019\xC9cole D\xE9mocratique de Paris passeront effectivement \xE0 c\xF4t\xE9 d\u2019une infinit\xE9 de savoirs\u2026 mais au m\xEAme titre que tous les autres enfants ! En revanche, nous n\u2019op\xE9rons aucune hi\xE9rarchisation des savoirs et sommes convaincus que tous les domaines de connaissance se valent. Ainsi, un enfant qui souhaiterait passer ses journ\xE9es \xE0 faire des math\xE9matiques ne serait pas consid\xE9r\xE9 comme plus intelligent qu\u2019un autre qui pr\xE9f\xE8rerait s\u2019adonner au jardinage ou au sport.",
            "En revanche, les \xE9coles traditionnelles \xE9tablissent, dans la conception de leurs programmes, une distinction entre certaines choses qui \xAB m\xE9ritent \xBB d\u2019\xEAtre apprises par les enfants, et d\u2019autres non. Ils leur imposent donc des disciplines qu\u2019ils n\u2019ont pas choisies, ainsi qu\u2019un rythme qui ne leur convient pas n\xE9cessairement. D\xE8s lors, l\u2019enfant n\u2019a plus le choix qu\u2019entre \xAB prendre le pli \xBB et devenir un bon \xE9l\xE8ve, docile mais jamais sollicit\xE9 dans les prises de d\xE9cision concernant son avenir, ou s\u2019engager sur la voie de l\u2019\xE9chec scolaire.",
            "Laisser l\u2019enfant choisir lui permettra de se consacrer \xE0 ce qui le passionne r\xE9ellement et d\u2019acqu\xE9rir une confiance en lui qui sera capitale au cours de sa vie."
          ]
        },
        {
          question: "Si mon enfant veut faire de l\u2019espagnol, de la chimie ou des math\xE9matiques, comment peut-il y arriver ?",
          answer: [
            "D\xE8s lors qu\u2019un enfant a d\xE9cid\xE9 souverainement de s\u2019int\xE9resser \xE0 un sujet, et qu\u2019il ne le fait pas pour faire plaisir \xE0 quelqu\u2019un d\u2019autre ou par pression sociale, il arrivera n\xE9cessairement \xE0 ses fins, en d\xE9ployant des tr\xE9sors d\u2019ing\xE9niosit\xE9 s\u2019il le faut. Par y arriver, il auront la possibilit\xE9 d\u2019\xEAtre soutenus dans leur qu\xEAte par l\u2019\xE9quipe p\xE9dagogique, ses propositions ainsi que son exp\xE9rience de la vie et des apprentissages.",
            "Ils pourront \xE9galement profiter de l\u2019environnement int\xE9rieur et ext\xE9rieur, extr\xEAmement riche et diversifi\xE9. En effet, nous avons la chance d\u2019\xEAtre au 21\xE8me si\xE8cle et d\u2019\xEAtre situ\xE9s dans une des villes les plus dynamiques au monde sur le plan intellectuel. Internet, mus\xE9es, m\xE9diath\xE8ques, ludoth\xE8ques, librairies\u2026 Chez nous, les moyens d\u2019acc\xE8s \xE0 l\u2019information et au savoir ne manquent pas !",
            "Il pourra bien s\xFBr s\u2019appuyer sur les membres de l\u2019\xE9quipe r\xE9f\xE9rente pour acc\xE9der aux informations et obtenir des r\xE9ponses \xE0 ses \xE9ventuelles questions. Par ailleurs, il est tout \xE0 fait bienvenu de faire appel \xE0 des personnes ressources ext\xE9rieures pouvant ponctuellement faciliter l\u2019acquisition d\u2019un savoir ou d\u2019une comp\xE9tence.",
            "Enfin, il pourra \xE9galement s\u2019appuyer sur ses pairs, qui sont eux aussi en qu\xEAte de savoirs et de comp\xE9tences. Il pourra ainsi \xE9changer avec eux, les aider, les soutenir, et ainsi progresser ensemble.",
            "Ainsi, il n\u2019y a pas un seul chemin pour apprendre. A l\u2019Ecole D\xE9mocratique de Paris, les enfants apprennent \xE0 apprendre !"
          ]
        },
        {
          question: "Mon enfant veut passer un dipl\xF4me : est-ce possible ?",
          answer: [
            "Bien entendu ! Tout membre qui exprime le souhait de passer un examen peut le faire. Mais dans ce cas \xE9galement, c\u2019est de lui que doit \xE9maner la volont\xE9 de passer l\u2019examen en question : en effet, la motivation \xE9tant le moteur principal de l\u2019apprentissage, il est n\xE9cessaire que le membre soit \xE0 l\u2019initiative de cette d\xE9marche !",
            "En d\xE9but d\u2019ann\xE9e, l\u2019\xE9quipe r\xE9f\xE9rente a pour habitude d\u2019informer les membres des dates et des modalit\xE9s d\u2019inscriptions aux examens (bac et brevet des coll\xE8ges).",
            "Ensuite pour la pr\xE9paration de l\u2019examen, comme pour n\u2019importe quel apprentissage dans l\u2019\xE9cole, le membre en sera l\u2019acteur principal ! L\u2019occasion de progresser dans son autonomie pour organiser son temps et son travail pour atteindre son objectif. ",
            "Si le membre en exprime le besoin, les membres de l\u2019\xE9quipe, et \xE9ventuellement des personnes ressources ext\xE9rieures, seront l\xE0 pour \xE9pauler le membre, en partageant avec lui leurs connaissances ou en l\u2019aidant \xE0 s\u2019organiser dans son travail."
          ]
        },
        {
          question: "Il est donc possible que mon enfant ne passe jamais son bac ? Je ne sais pas si je suis pr\xEAt \u2026 ",
          answer: [
            "Il  revient aux parents de se poser la question : \xEAtes-vous pr\xEAts \xE0 faire  confiance \xE0 votre enfant pour prendre ses responsabilit\xE9s sur sa propre  vie, ou faut-il le forcer \xE0 se pr\xE9parer au Bac m\xEAme s'il faut en venir \xE0  la carotte et au b\xE2ton ? Notre prise de position est claire : nous faisons confiance au jeune pour impulser et pers\xE9v\xE9rer dans la formation dont il a besoin pour \xEAtre qui il souhaite \xEAtre.",
            "Pour  une majorit\xE9 des jeunes des \xE9coles d\xE9mocratiques, cela passe par le Bac  et le suivi d'une formation universitaire. Le livre the lives of Subdbury alumni (2005) est  un sondage de ce que sont devenus les centaines d'anciens de Sudbury-Valley. Parmi eux, 80% finissent par aller \xE0 l'universit\xE9, et  obtiennent habituellement leur premier choix. Il y a aussi quelques  originalit\xE9s, comme un cr\xE9ateur d'une soci\xE9t\xE9 d'informatique qui s'est  consacr\xE9 uniquement \xE0 la p\xEAche jusqu'\xE0 ses 15 ans, un professeur de  math\xE9matiques qui n'a pas suivi de le\xE7ons de maths jusqu'\xE0 son entr\xE9e \xE0  l'universit\xE9, et plus r\xE9cemment Laura Poitras et son Oscar d\xE9cern\xE9 pour Citizenfour, le documentaire sur Snowden."
          ]
        },
        {
          question: "Question 3",
          answer: "R\xE9ponse 3"
        },
        {
          question: "Question 3",
          answer: "R\xE9ponse 3"
        },
        {
          question: "Question 3",
          answer: "R\xE9ponse 3"
        },
        {
          question: "Question 3",
          answer: "R\xE9ponse 3"
        },
        {
          question: "Question 3",
          answer: "R\xE9ponse 3"
        }
      ],
      isOpen: []
    };
  },
  methods: {
    toggleAccordion(index) {
      this.isOpen[index] = !this.isOpen[index];
    }
  },
  mounted() {
    this.isOpen = new Array(this.faqList.length).fill(false);
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_icon = __nuxt_component_0$1;
  _push(`<!--[--><div class="title" data-v-8a017ceb>Foire aux questions</div><div data-v-8a017ceb><!--[-->`);
  ssrRenderList($data.faqList, (item, index) => {
    _push(`<div class="wrapper" data-v-8a017ceb><div class="wrapperint" data-v-8a017ceb><h2 class="question" data-v-8a017ceb><div class="blocquestion" data-v-8a017ceb><div class="question2" data-v-8a017ceb>${ssrInterpolate(item.question)}</div><div class="iconwrapper" data-v-8a017ceb>`);
    _push(ssrRenderComponent(_component_icon, {
      name: $data.isOpen[index] ? "mdi:chevron-up-box" : "mdi:chevron-down-box",
      class: "icon"
    }, null, _parent));
    _push(`</div></div></h2></div><div style="${ssrRenderStyle($data.isOpen[index] ? null : { display: "none" })}" class="answerwrap" data-v-8a017ceb>`);
    if (Array.isArray(item.answer)) {
      _push(`<p class="answer" data-v-8a017ceb><!--[-->`);
      ssrRenderList(item.answer, (answerPart, answerIndex) => {
        _push(`<span data-v-8a017ceb>${ssrInterpolate(answerPart)}</span>`);
      });
      _push(`<!--]--></p>`);
    } else {
      _push(`<p class="answer" data-v-8a017ceb>${ssrInterpolate(item.answer)}</p>`);
    }
    _push(`</div></div>`);
  });
  _push(`<!--]--></div><!--]-->`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/faq.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7], ["__scopeId", "data-v-8a017ceb"]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div class="wrapper" data-v-b86569cb><div class="intwrapper" data-v-b86569cb><h2 class="title" data-v-b86569cb>La montgolfi\xE8re est un \xE9tablissement scolaire situ\xE9 dans le m\xE9doc</h2><p class="text" data-v-b86569cb>Nous proposons un mod\xE8le \xE9ducatif lib\xE9r\xE9 des programmes scolaires pr\xE9d\xE9finis.</p><p class="text" data-v-b86569cb>Les enfants sont libres de choisir leurs activit\xE9s et de s&#39;investir dans des projets qui les int\xE9ressent.</p><p class="text" data-v-b86569cb>Nous accueillons les enfants de 3 \xE0 16 ans</p></div><div class="intwrapper" data-v-b86569cb><h1 class="title" data-v-b86569cb>Une \xE9cole o\xF9 les enfants sont libres et responsables.</h1><p class="text" data-v-b86569cb>Nous souhaitons favoriser l\u2019autonomie et la responsabilit\xE9, valoriser le partage et la coop\xE9ration, donner confiance en soi et faciliter le d\xE9veloppement de comp\xE9tences transversales indispensables \xE0 tout adulte \xE9panoui. L\u2019\xC9cole D\xE9mocratique de Paris se veut \xEAtre un lieu d\u2019\xE9panouissement dans lequel l\u2019exp\xE9rience individuelle et le vivre ensemble sont privil\xE9gi\xE9s. </p></div></div><div class="intwrapper" data-v-b86569cb><p class="texte" data-v-b86569cb>Ce lieu d\u2019\xE9panouissement est rendu possible gr\xE2ce \xE0 la mise en application de nos valeurs fondatrices :</p></div><!--]-->`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/generalites.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-b86569cb"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  name: "HomePage",
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
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_img = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-6ce35285><div class="columns" data-v-6ce35285><div class="column" data-v-6ce35285><h1 class="title" data-v-6ce35285>Des locaux et un environnement mat\xE9riel adapt\xE9s</h1><p class="textlist" data-v-6ce35285>Les locaux de l\u2019\xE9cole ne ressemblent pas \xE0 une \xE9cole classique. La Montgolfi\xE8re ressemble en fait \xE0 une grande maison, on y trouve : </p><ul class="listwrap" data-v-6ce35285><li class="listitem" data-v-6ce35285>une salle tr\xE8s calme : on ne peut pas y parler, elle est utile pour travailler seul o\xF9 se reposer</li><li class="listitem" data-v-6ce35285>une salle calme : on peut parler doucement, on peut ainsi y travailler \xE0 plusieurs</li><li class="listitem" data-v-6ce35285>un atelier : avec un acc\xE8s \xE0 l\u2019eau, qui permet de r\xE9aliser de nombres activit\xE9s manuelles et cr\xE9atives (dessin, peinture, poterie, couture\u2026) et un espace d\u2019exp\xE9riences scientifiques</li><li class="listitem" data-v-6ce35285>une salle jeu : avec de nombreux jeux de construction (l\xE9gos, kaplas\u2026) et dinettes\u2026</li><li class="listitem" data-v-6ce35285>une cuisine \xE9quip\xE9e</li><li class="listitem" data-v-6ce35285>un grand salon : avec canap\xE9s et tables pour manger ainsi qu\u2019un babyfoot</li><li class="listitem" data-v-6ce35285>un petit salon : un espace cosy pour se poser, discuter, r\xEAver, jouer\u2026</li><li class="listitem" data-v-6ce35285>une salle musique et cin\xE9ma : r\xE9servable pour visionner un film \xE0 plusieurs, et o\xF9 on peut \xE9galement d\xE9couvrir la musique gr\xE2ce \xE0 un clavier, des guitares, une batterie\u2026</li><li class="listitem" data-v-6ce35285>une m\xE9diath\xE8que : on y trouve des ordinateurs, des livres et de nombreux jeux de soci\xE9t\xE9</li><li class="listitem" data-v-6ce35285>une salle de sport : avec un mur d\u2019escalade, des halt\xE8res, des tapis de sol, des ballons\u2026</li></ul><p class="textlist" data-v-6ce35285>L\u2019am\xE9nagement des locaux, les ressources mat\xE9rielles et humaines permettent l\u2019alternance de phases de travail personnel et de phases collectives et concourent \xE0 une approche syst\xE9mique des apprentissages.</p></div><div class="column" data-v-6ce35285><div class="slider-container" data-v-6ce35285><!--[-->`);
  ssrRenderList(_ctx.sliderImages, (image, index) => {
    _push(ssrRenderComponent(_component_nuxt_img, {
      key: index,
      src: `/slider${image}.jpg`,
      class: "slider-image",
      alt: "Not found",
      width: 600,
      height: 400
    }, null, _parent));
  });
  _push(`<!--]--></div></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/locaux.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-6ce35285"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  name: "HomePage",
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
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_img = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-1f2bd8e4><div data-v-1f2bd8e4><h1 class="maintitle" data-v-1f2bd8e4>Notre projet p\xE9dagogique</h1></div><div class="columns" data-v-1f2bd8e4><div class="column" data-v-1f2bd8e4><h1 class="title" data-v-1f2bd8e4>Les enfants au coeur de leurs apprentissages</h1><p class="text" data-v-1f2bd8e4>Dans le prolongement des travaux d\u2019Adolphe Ferri\xE8re, de C\xE9lestin Freinet et Bernard Collot, notre projet p\xE9dagogique \xE0 partir de la rentr\xE9e 2023-2024, s\u2019inspire des p\xE9dagogies actives et coop\xE9ratives tout en pr\xF4nant la dimension syst\xE9mique des apprentissages. </p><p class="text" data-v-1f2bd8e4>Nous soutenons en effet, que lorsque le jeune se met en mouvement pour accomplir une action qui a du sens pour lui, il enclenche un processus de recherche de solutions et acquiert les apprentissages n\xE9cessaires en mobilisant les ressources p\xE9dagogiques mat\xE9rielles et humaines pr\xE9vues \xE0 cet effet.</p><p class="text" data-v-1f2bd8e4>a d\xE9marche de l\u2019\xE9quipe p\xE9dagogique prend sa source dans les sp\xE9cificit\xE9s et le v\xE9cu des membres scolaris\xE9s en soutenant leur curiosit\xE9, leur jugement, leur raisonnement et leur esprit d\u2019observation multipliant ainsi le potentiel de progression de chacun d\u2019entre eux et leur permettant d\u2019\xEAtre pleinement acteurs de leurs apprentissages.. </p></div><div class="column" data-v-1f2bd8e4><div class="slider-container" data-v-1f2bd8e4><!--[-->`);
  ssrRenderList(_ctx.sliderImages, (image, index) => {
    _push(ssrRenderComponent(_component_nuxt_img, {
      key: index,
      src: `/slider${image}.jpg`,
      class: "slider-image",
      alt: "Not found",
      width: 600,
      height: 400
    }, null, _parent));
  });
  _push(`<!--]--></div></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/projetpedagogique.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-1f2bd8e4"]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-5 mt-10" }, _attrs))}></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/separator.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  name: "HomePage",
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
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_img = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-8bd47f06><div class="columns" data-v-8bd47f06><div class="column" data-v-8bd47f06><div class="internal" data-v-8bd47f06><h1 class="title" data-v-8bd47f06>Des sorties vari\xE9es</h1><p class="text" data-v-8bd47f06>Les murs de cette \xE9cole sont perm\xE9ables, car l&#39;on y vit aussi bien en dedans qu&#39;au dehors. Cette \xE9cole, qui abrite un \xE9cosyst\xE8me vivant et dynamique, est nich\xE9e au c\u0153ur d&#39;un autre \xE9cosyst\xE8me tout aussi vivant et dynamique. Chacun peut, autant qu&#39;il le d\xE9sire, utiliser ce que la ville environnante lui offre, comme autant de richesses. </p></div><div class="internal" data-v-8bd47f06><h1 class="title" data-v-8bd47f06>A chaque \xE2ge ses sorties</h1><p class="text" data-v-8bd47f06>Les ados qui ont l\u2019autorisation parentale de sortir seuls peuvent le faire quand ils le veulent en pr\xE9venant de leur sortie et en respectant les consignes de s\xE9curit\xE9.Ceux qui ont besoin d\u2019\xEAtre accompagn\xE9s par un adulte peuvent \xE9galement sortir en sollicitant l\u2019\xE9quipe.</p><p class="text" data-v-8bd47f06>Souvent, une sortie initi\xE9e par un ou quelques membres est propos\xE9e \xE0 l\u2019ensemble du collectif. Nous sortons ainsi tr\xE8s r\xE9guli\xE8rement, que ce soit simplement pour jouer \xE0 l\u2019air libre dans les parcs alentours, sur un terrain de sport, \xE0 la piscine, \xE0 la patinoire, pour jardiner au jardin partag\xE9, pour visiter un mus\xE9e\u2026</p></div></div><div class="column" data-v-8bd47f06><div class="slider-container" data-v-8bd47f06><!--[-->`);
  ssrRenderList(_ctx.sliderImages, (image, index) => {
    _push(ssrRenderComponent(_component_nuxt_img, {
      key: index,
      src: `/slider${image}.jpg`,
      class: "slider-image",
      alt: "Not found",
      width: 600,
      height: 400
    }, null, _parent));
  });
  _push(`<!--]--></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sorties.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-8bd47f06"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_Icon = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapping" }, _attrs))} data-v-0ca65941><h1 class="maintitle" data-v-0ca65941>Les valeurs que nous d\xE9fendons</h1><div class="herowrapper" data-v-0ca65941><div class="cardwrapper" data-v-0ca65941>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "fxemoji:school",
    class: "iconed"
  }, null, _parent));
  _push(`<h2 class="sectiontitle" data-v-0ca65941>Libert\xE9 </h2><p class="text" data-v-0ca65941>Pour nous, les humains sont naturellement curieux et apprenants ! Surtout s&#39;ils peuvent explorer leur propre motivation et prendre leur temps. A l&#39;Ecole D\xE9mocratique de Paris, chacun peut choisir librement ses activit\xE9s, avancer \xE0 son rythme, en d\xE9finissant ses propres objectifs... tout en prenant soin de respecter la libert\xE9 des autres !</p></div><div class="cardwrapper" data-v-0ca65941>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "fluent-emoji-flat:statue-of-liberty",
    class: "iconed"
  }, null, _parent));
  _push(`<h2 class="sectiontitle" data-v-0ca65941>Equit\xE9</h2><p class="text" data-v-0ca65941>L\u2019\xE9cole est r\xE9gie par le principe d\u2019\xE9galit\xE9 de droits entre individus, ind\xE9pendamment de leur \xE2ge. Tout le monde peut participer aux d\xE9bats et d\xE9cisions concernant la vie de l\u2019\xE9cole sur la base de \xAB 1 personne = 1 voix \xBB. Ainsi, adultes et enfants \xE9voluent dans le m\xEAme cadre, et travaillent ensemble \xE0 l&#39;\xE9volution et au respect du r\xE8glement int\xE9rieur.</p></div><div class="cardwrapper" data-v-0ca65941>`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "noto-v1:handshake-medium-dark-skin-tone",
    class: "iconed"
  }, null, _parent));
  _push(`<p class="sectiontitle" data-v-0ca65941>Solidarit\xE9</p><p class="text" data-v-0ca65941>Lib\xE9r\xE9e des contraintes de la comp\xE9tition et de la hi\xE9rarchie, anim\xE9e par des valeurs de bienveillance et de respect, l\u2019\xE9cole est un terreau id\xE9al pour la construction de liens authentiques : la rencontre des \xE2ges cr\xE9e une multitude d\u2019interactions, sources pr\xE9cieuses d\u2019apprentissages.</p></div></div><h1 class="mainlink" data-v-0ca65941>Consultez notre charte des valeurs</h1></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/valeurs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-0ca65941"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_img = __nuxt_component_0;
  const _component_Generalites = __nuxt_component_1;
  const _component_Separator = __nuxt_component_2;
  const _component_valeurs = __nuxt_component_3;
  const _component_Projetpedagogique = __nuxt_component_4;
  const _component_Environnement = __nuxt_component_5;
  const _component_locaux = __nuxt_component_6;
  const _component_Sorties = __nuxt_component_7;
  const _component_Faq = __nuxt_component_8;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-5f4b9726>`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    src: "./fond.jpg",
    alt: "notfound",
    class: "imagefond",
    blur: ""
  }, null, _parent));
  _push(`<div class="postitle" data-v-5f4b9726><div class="overlay" data-v-5f4b9726>`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    src: "./logo2.png",
    width: "1000"
  }, null, _parent));
  _push(`</div></div>`);
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
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ecole.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ecole = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5f4b9726"]]);

export { ecole as default };
//# sourceMappingURL=ecole-545e5e22.mjs.map
