<template>
  <div class="title">Foire aux questions</div>
  <div>
    <div v-for="(item, index) in faqList" :key="index" class="wrapper">
      <div class="wrapperint">
        <h2 class="question" @click="toggleAccordion(index)">
          <div class="blocquestion">
            <div class="question2">{{ item.question }}</div>
            
            <div class="iconwrapper">
              <icon
                :name="isOpen[index] ? 'mdi:chevron-up-box' : 'mdi:chevron-down-box'"
                class="icon"
              />
            </div>
          </div>
        </h2>
      </div>
      <div v-show="isOpen[index]" class="answerwrap">
    <p class="answer" v-if="Array.isArray(item.answer)">
      <span v-for="(answerPart, answerIndex) in item.answer" :key="answerIndex">{{ answerPart }}</span>
    </p>
    <p class="answer" v-else>{{ item.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqList: [
        {
          question: "Comment les enfants peuvent-ils apprendre sans contrainte ?",
          answer: [
            "Notre pédagogie repose sur une conviction qui devrait être une évidence, mais que deux siècles d’école traditionnelle ont fini par faire oublier : nous sommes tous des êtres naturellement apprenants !",
            "Entre sa naissance et l’âge de trois ans, l’enfant acquiert une quantité exceptionnelle de savoirs et de compétences. Ainsi, il apprend à marcher, à manger, à échanger et partager avec les autres… D’ores et déjà, il s’insère dans le monde social et se dote des instruments qui lui permettront de vivre en société, et ce sans avoir besoin ni de programme, ni de professeur imposé, ni d’évaluation ! Au sein des écoles démocratiques, le postulat est qu’il n’y a pas de raison fondamentale que le processus d’apprentissage change de forme à partir de l’âge de 3 ans. Un enfant qui apprend à maîtriser la syntaxe et la conjugaison tout seul est tout à fait capable d’apprendre à lire, écrire, compter mais également à faire de la biologie, du théâtre ou du jardinage… sans activités imposées !",
            "Dans notre école, les apprentissages se font ainsi de manière formelle (cours, ateliers, projets …) ou informelle (jeu, conversations, sorties, activités du quotidien …) ! ",
            "Par ailleurs, les membres de l’école bénéficient de l’accompagnement d’une équipe pédagogique bienveillante et expérimentée, qui leur propose des temps d’apprentissage structurés leur permettant de progresser sur les savoirs fondamentaux. Ces temps seront également l’occasion de préparer des examens nationaux ou de bâtir des projets personnalisés. Non obligatoires, ces temps d’apprentissage s’inspirent des apports pédagogiques d’intellectuels aussi importants que Célestin Freinet, Paulo Freire ou encore Olivier Decroly.",
            "En résumé, à l’Ecole Démocratique de Paris, les apprentissages sont auto-dirigés : les modalités de l’apprentissage (quoi, quand, comment, avec qui ?) sont fixées par l’apprenant.",
            "Pour approfondir, nous vous invitons à visionner le film documentaire Être et Devenir et consulter notre page de Ressources à visionner et lire.",
        ]
        },
        {
          question: "Mon enfant ne risque-t-il pas de passer à côté d’une infinité de savoirs ?",
          answer: [
            "L’honnêteté nous oblige à le dire : les enfants de l’École Démocratique de Paris passeront effectivement à côté d’une infinité de savoirs… mais au même titre que tous les autres enfants ! En revanche, nous n’opérons aucune hiérarchisation des savoirs et sommes convaincus que tous les domaines de connaissance se valent. Ainsi, un enfant qui souhaiterait passer ses journées à faire des mathématiques ne serait pas considéré comme plus intelligent qu’un autre qui préfèrerait s’adonner au jardinage ou au sport.",
            "En revanche, les écoles traditionnelles établissent, dans la conception de leurs programmes, une distinction entre certaines choses qui « méritent » d’être apprises par les enfants, et d’autres non. Ils leur imposent donc des disciplines qu’ils n’ont pas choisies, ainsi qu’un rythme qui ne leur convient pas nécessairement. Dès lors, l’enfant n’a plus le choix qu’entre « prendre le pli » et devenir un bon élève, docile mais jamais sollicité dans les prises de décision concernant son avenir, ou s’engager sur la voie de l’échec scolaire.",
            "Laisser l’enfant choisir lui permettra de se consacrer à ce qui le passionne réellement et d’acquérir une confiance en lui qui sera capitale au cours de sa vie.",

        ]
        },
        {
          question: "Si mon enfant veut faire de l’espagnol, de la chimie ou des mathématiques, comment peut-il y arriver ?",
          answer: [
            "Dès lors qu’un enfant a décidé souverainement de s’intéresser à un sujet, et qu’il ne le fait pas pour faire plaisir à quelqu’un d’autre ou par pression sociale, il arrivera nécessairement à ses fins, en déployant des trésors d’ingéniosité s’il le faut. Par y arriver, il auront la possibilité d’être soutenus dans leur quête par l’équipe pédagogique, ses propositions ainsi que son expérience de la vie et des apprentissages.",
            "Ils pourront également profiter de l’environnement intérieur et extérieur, extrêmement riche et diversifié. En effet, nous avons la chance d’être au 21ème siècle et d’être situés dans une des villes les plus dynamiques au monde sur le plan intellectuel. Internet, musées, médiathèques, ludothèques, librairies… Chez nous, les moyens d’accès à l’information et au savoir ne manquent pas !",
            "Il pourra bien sûr s’appuyer sur les membres de l’équipe référente pour accéder aux informations et obtenir des réponses à ses éventuelles questions. Par ailleurs, il est tout à fait bienvenu de faire appel à des personnes ressources extérieures pouvant ponctuellement faciliter l’acquisition d’un savoir ou d’une compétence.",
            "Enfin, il pourra également s’appuyer sur ses pairs, qui sont eux aussi en quête de savoirs et de compétences. Il pourra ainsi échanger avec eux, les aider, les soutenir, et ainsi progresser ensemble.",
            "Ainsi, il n’y a pas un seul chemin pour apprendre. A l’Ecole Démocratique de Paris, les enfants apprennent à apprendre !",
          ]
        },
        {
          question: "Mon enfant veut passer un diplôme : est-ce possible ?",
          answer: [
            "Bien entendu ! Tout membre qui exprime le souhait de passer un examen peut le faire. Mais dans ce cas également, c’est de lui que doit émaner la volonté de passer l’examen en question : en effet, la motivation étant le moteur principal de l’apprentissage, il est nécessaire que le membre soit à l’initiative de cette démarche !",
            "En début d’année, l’équipe référente a pour habitude d’informer les membres des dates et des modalités d’inscriptions aux examens (bac et brevet des collèges).",
            "Ensuite pour la préparation de l’examen, comme pour n’importe quel apprentissage dans l’école, le membre en sera l’acteur principal ! L’occasion de progresser dans son autonomie pour organiser son temps et son travail pour atteindre son objectif. ",
            "Si le membre en exprime le besoin, les membres de l’équipe, et éventuellement des personnes ressources extérieures, seront là pour épauler le membre, en partageant avec lui leurs connaissances ou en l’aidant à s’organiser dans son travail.",
        ]
        },
        {
          question: "Il est donc possible que mon enfant ne passe jamais son bac ? Je ne sais pas si je suis prêt … ",
          answer: [
            "Il  revient aux parents de se poser la question : êtes-vous prêts à faire  confiance à votre enfant pour prendre ses responsabilités sur sa propre  vie, ou faut-il le forcer à se préparer au Bac même s'il faut en venir à  la carotte et au bâton ? Notre prise de position est claire : nous faisons confiance au jeune pour impulser et persévérer dans la formation dont il a besoin pour être qui il souhaite être.", 
            "Pour  une majorité des jeunes des écoles démocratiques, cela passe par le Bac  et le suivi d'une formation universitaire. Le livre the lives of Subdbury alumni (2005) est  un sondage de ce que sont devenus les centaines d'anciens de Sudbury-Valley. Parmi eux, 80% finissent par aller à l'université, et  obtiennent habituellement leur premier choix. Il y a aussi quelques  originalités, comme un créateur d'une société d'informatique qui s'est  consacré uniquement à la pêche jusqu'à ses 15 ans, un professeur de  mathématiques qui n'a pas suivi de leçons de maths jusqu'à son entrée à  l'université, et plus récemment Laura Poitras et son Oscar décerné pour Citizenfour, le documentaire sur Snowden.",
                      ]
        },
        {
          question: "Question 3",
          answer: "Réponse 3",
        },
        {
          question: "Question 3",
          answer: "Réponse 3",
        },
        {
          question: "Question 3",
          answer: "Réponse 3",
        },
        {
          question: "Question 3",
          answer: "Réponse 3",
        },
        {
          question: "Question 3",
          answer: "Réponse 3",
        },
      ],
      isOpen: [],
    };
  },
  methods: {
    toggleAccordion(index) {
      this.isOpen[index] = !this.isOpen[index];
    },
  },
  mounted() {
    // initialize isOpen array with false value for each question
    this.isOpen = new Array(this.faqList.length).fill(false);
  },
};
</script>

<style scoped>
.title {
  @apply text-4xl font-bold text-center;
}
.wrapper {
  @apply relative mt-10 flex flex-col bg-indigo-200 w-10/12 mx-auto cursor-pointer rounded-2xl;
}
.wrapperint {
  @apply relative mt-10;
}
.question {
  @apply text-xl font-bold mt-0 mb-6 text-left text-gray-700;
}
.question2 {
  @apply text-2xl font-bold mt-0 mb-6 text-left ml-10;
}
.blocquestion {
  @apply flex justify-between;
}
.iconwrapper {
  @apply flex justify-center items-center;
}
.icon {
  @apply text-6xl text-gray-700 mr-10;
}
.answerwrap {
  @apply relative mt-10 p-10;
}
.answer {
  @apply text-xl text-gray-700 text-justify indent-5;
}
</style>
