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
              "Bonjour les amis ! Savez-vous que nous sommes tous des êtres naturellement apprenants ? Depuis notre naissance, nous avons déjà appris tellement de choses sans contrainte ! On a appris à marcher, à manger, à partager avec les autres... Et devinez quoi ? On peut continuer à apprendre de la même manière, sans avoir besoin de programme ou de professeur imposé ! À l'école La Montgolfière, on pense que les enfants peuvent choisir ce qu'ils veulent apprendre, quand ils le veulent et comment ils le veulent. On peut apprendre en jouant, en discutant, en faisant des sorties ou même en préparant des projets. Les apprentissages peuvent être formels ou informels, c'est-à-dire qu'on peut apprendre de différentes façons !",
              "Et devinez quoi ? À l'école La Montgolfière, on a une équipe pédagogique super sympa qui est là pour nous accompagner dans nos apprentissages. Ils nous aident à progresser dans les savoirs fondamentaux et à préparer des examens si on le souhaite. Mais rappelez-vous, tout est basé sur notre propre choix et notre motivation ! On est libres de décider comment et quoi apprendre. C'est chouette, non ? Si vous voulez en savoir plus, vous pouvez regarder le film documentaire Être et Devenir et consulter notre page de ressources à lire et à visionner.",
                    ]
        },
        {
            question: "Mon enfant ne risque-t-il pas de passer à côté d’une infinité de savoirs ?",
            answer: [
              "Salut les amis écolos ! Une question importante : est-ce que mon enfant risque de manquer plein de choses en choisissant ce type d'école ? Eh bien, la réponse est oui, mais ça concerne tous les enfants, pas seulement ceux de notre école ! La différence, c'est qu'on ne classe pas les savoirs en disant que certains sont plus importants que d'autres. Chez nous, tous les domaines de connaissance se valent ! Si un enfant adore les mathématiques, c'est génial ! Et s'il préfère le jardinage ou le sport, c'est tout aussi génial ! On respecte les choix de chacun.",
              "Par contre, dans les écoles traditionnelles, ils décident pour nous ce qu'il faut apprendre et à quel rythme. Du coup, on n'a pas toujours le choix, et ça peut être difficile pour certains enfants. À l'école démocratique, on pense que c'est important de laisser chaque enfant choisir ce qui le passionne vraiment. Comme ça, on peut se consacrer à ce qui nous intéresse le plus et être vraiment motivé pour apprendre. Et ça, c'est super important pour réussir dans la vie !",
                    ]
        },

        {
  question: "Si je veux apprendre l'espagnol, la chimie ou les mathématiques, comment est-ce que je peux y arriver ?",
  answer: [
    "Pas de soucis ! Si tu décides toi-même de t'intéresser à un sujet, sans te sentir obligé par quelqu'un d'autre ou par la pression sociale, tu peux atteindre tes objectifs, c'est sûr comme 1+1=2 ! Tu pourras faire preuve d'une créativité incroyable pour y arriver, avec le soutien de l'équipe pédagogique qui aura plein d'idées à te proposer et qui pourra partager son expérience de la vie et des apprentissages.",
    "En plus, tu pourras profiter de notre super environnement intérieur et extérieur, qui est vraiment trop cool et rempli de surprises. Nous sommes super chanceux d'être au 21e siècle, dans l'une des villes les plus géniales pour apprendre de nouvelles choses. Internet, les musées, les médiathèques, les ludothèques, les librairies... Il y a tellement de façons de trouver de l'information et de la connaissance !",
    "Et bien sûr, tu pourras toujours compter sur les membres de l'équipe référente pour t'apporter des infos et répondre à tes questions. Et si tu as besoin, tu pourras même faire appel à des personnes extérieures super calées qui pourront t'aider de temps en temps pour apprendre encore plus.",
    "Et devine quoi ? Tu pourras aussi te tourner vers tes copains et copines qui cherchent, eux aussi, à en savoir plus et à développer leurs compétences. Tu pourras échanger avec eux, les aider et avancer ensemble vers de nouveaux sommets du savoir !",
    "Donc, tu vois, il n'y a pas qu'un seul chemin pour apprendre. À l'École Démocratique de Paris, on apprend tout en s'amusant et en suivant nos passions !",
  ]
},


{
  question: "Je veux passer un diplôme, est-ce que c'est possible ?",
  answer: [
    "Bien sûr ! Si tu as envie de passer un examen, tu en as totalement la possibilité. Mais tu sais quoi ? Il est super important que ce soit toi qui décide de le faire, parce que tu as vraiment envie d'apprendre !",
    "Au début de l'année, l'équipe référente te donnera toutes les infos sur les dates et les modalités d'inscription aux examens comme le bac et le brevet des collèges. C'est trop cool, non ?",
    "Pour te préparer à l'examen, tu seras le héros principal de ton apprentissage, comme pour toutes les autres activités à l'école. C'est l'occasion parfaite pour développer ton autonomie en organisant ton temps et ton travail pour atteindre ton objectif.",
    "Et si jamais tu en as besoin, les membres de l'équipe et même des personnes ressources extérieures seront là pour te soutenir en partageant leurs connaissances ou en t'aidant à t'organiser.",
    "Alors encourage-toi à suivre ton propre chemin et à persévérer dans la réalisation de tes objectifs. À l'École de la Montgolfière, chaque enfant peut aller aussi loin qu'il le souhaite !",
  ]
},


      
        {
          question: "Comment puis-je être sûr(e) que je recevrai une super éducation, qui respecte la nature, favorise la solidarité et la paix, dans notre école ?",
          answer: [
         "Dans notre école, notre objectif principal est de t'offrir une éducation extraordinaire qui respecte la nature, encourage la solidarité et cultive la paix. Parce que nous croyons que chaque enfant mérite d'apprendre dans un environnement respectueux de notre belle planète, où l'apprentissage suit les rythmes naturels et où tout le monde est gentil et solidaire.",
         "Nous avons des enseignants formidables qui incarnent ces valeurs dans leurs enseignements. Ils t'aideront à grandir et à apprendre de manière équilibrée et holistique. Ils te montreront comment prendre soin de notre terre, comment aider les autres et comment être un super-héros de la paix.",
                   ]
        },

        {
  question: "Comment pouvez-vous me garantir que je serai bien préparé(e) pour réussir à l'école et dans la vie, tout en respectant la nature, en étant solidaire et en promouvant la paix ?",
  answer: [
    "Dans notre école, nous te préparons de manière exceptionnelle pour réussir dans tous les domaines de ta vie, en respectant la nature, en étant solidaire et en propageant la paix autour de toi. Nous croyons que tu apprends mieux lorsque tu suis ton intuition, quand tu écoutes tes besoins et quand tu peux être toi-même dans un environnement bienveillant.",
    "Nous utilisons des méthodes d'apprentissage spéciales, inspirées par des pionniers écologiques et humanistes comme Montessori et Freinet, pour que tu puisses développer toutes tes compétences tout en prenant soin de notre belle planète et en aidant les autres. Tu seras ainsi prêt(e) à briller à l'école et dans ta vie en faisant du bien autour de toi.",
  ]
},

        {
          question: "Comment l'école assure-t-elle la sécurité, le bien-être et le respect du vivant de mon enfant au quotidien ?",
          answer: "La sécurité, le bien-être et le respect du vivant sont des valeurs fondamentales de notre école. Nous créons un environnement sûr, bienveillant et respectueux où chaque enfant est encouragé à développer une relation harmonieuse avec la nature et tous les êtres vivants. Nous sensibilisons les enfants à l'importance de préserver notre planète, nous intégrons des pratiques durables dans notre quotidien et nous favorisons le respect mutuel entre tous les membres de la communauté éducative.",
        },
        {
          question: "Quelle est l'expérience des enseignants et du personnel encadrant pour promouvoir les valeurs de respect du vivant, de solidarité, d'harmonie et de paix auprès des enfants ?",
          answer: "    Notre équipe éducative partage une conviction profonde envers les valeurs de respect du vivant, de solidarité, d'harmonie et de paix. Nos enseignants expérimentés sont formés pour incarner ces valeurs et les transmettre aux enfants à travers leur approche pédagogique. Ils favorisent l'empathie, la coopération, la résolution pacifique des conflits et l'engagement envers la préservation de la nature. Ils sont également sensibilisés aux enjeux environnementaux et sociaux actuels, ce qui leur permet d'inspirer les enfants à devenir des citoyens responsables et engagés.",
        },
        {
          question: "Comment les problèmes de discipline ou de comportement sont-ils gérés dans cette école, en prenant en compte les valeurs de respect du vivant, de solidarité, d'harmonie et de paix ?",
          answer: " Dans notre école, nous privilégions une approche respectueuse et bienveillante pour gérer les problèmes de discipline ou de comportement. Nous encourageons les enfants à résoudre les conflits de manière pacifique, en favorisant la communication non violente et le respect mutuel. Notre objectif est de cultiver un climat harmonieux où chaque enfant se sent écouté, compris et respecté dans sa singularité, tout en étant conscient de l'impact de ses actions sur les autres et sur le vivant qui l'entoure.",
        },
        { question: "Comment l'école encourage-t-elle la solidarité, l'harmonie et la paix parmi les enfants ?",
          answer: "Notre équipe éducative partage une conviction profonde envers les valeurs de respect du vivant, de solidarité, d'harmonie et de paix. Nos enseignants expérimentés sont formés pour incarner ces valeurs et les transmettre aux enfants à travers leur approche pédagogique. Ils favorisent l'empathie, la coopération, la résolution pacifique des conflits et l'engagement envers la préservation de la nature. Ils sont également sensibilisés aux enjeux environnementaux et sociaux actuels, ce qui leur permet d'inspirer les enfants à devenir des citoyens responsables et engagés.",
        },
        {
          question: "Comment l'école assure-t-elle la sécurité, le bien-être et le respect du vivant de mon enfant au quotidien ?",
          answer: "La  solidarité, l'harmonie et la paix sont des valeurs que nous cultivons activement dans notre école. Nous encourageons les enfants à coopérer, à travailler ensemble sur des projets communs et à développer un esprit de solidarité envers leurs camarades et envers la nature. Nous favorisons également la résolution pacifique des conflits, en offrant aux enfants des outils et des compétences pour communiquer efficacement, exprimer leurs besoins et trouver des solutions respectueuses de tous. Par le biais d'activités, de discussions et de moments de réflexion, nous éveillons la conscience des enfants à la beauté de l'harmonie et à l'importance de la paix dans leurs interactions quotidiennes.",
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
  @apply relative mt-10 flex flex-col bg-soutenu-charte-cyan w-11/12 mx-auto cursor-pointer rounded-2xl;
}
.wrapperint {
  @apply relative mt-10;
}
.question {
  @apply text-xl font-bold mt-0 mb-6 text-center text-pastel-charte-jaune bg-soutenu-charte-cyan p-5 rounded-2xl shadow-2xl;
}
.question2 {
  @apply text-2xl font-bold mt-0 mb-6 text-center ml-10;
}
.blocquestion {
  @apply flex flex-row gap-10;
}
.iconwrapper {
  @apply flex justify-center items-center;
}
.icon {
  @apply text-3xl text-pastel-charte-jaune mr-10;
}
.answerwrap {
  @apply relative mt-10 p-10;
}
.answer {
  @apply text-xl text-slate-50 text-justify indent-5;
}
</style>
