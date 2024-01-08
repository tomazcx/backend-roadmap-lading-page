<script setup lang="ts">
import QuestionSvg from "../../assets/illustrations/question.svg"
import Question from "../molecules/Question.vue";

const questions = [
  {
    question: 'É um curso em vídeo ?',
    answer:
      'Não! É um guia criado por mim onde eu ensino a como utilizar tecnologias backend. Tudo isso é ensinado com didática simples de entender, até quem está iniciando consegue entender o que cada linguagem faz.',
  },
  {
    question: 'Por onde eu acesso o Roadmap após a compra?',
    answer: 'Você receberá um e-mail com o link para acessar o Roadmap.',
  },
  {
    question: 'O acesso é vitalício?',
    answer:
      'Sim! Você terá acesso vitalício ao Roadmap, podendo acessar quando quiser e com todas as futuras atualizações.',
  },
]
</script>

<template>
	<section class="xl:grid xl:grid-cols-12 flex flex-col xl:gap-32 gap-16">
		<div class="flex gap-12 flex-col xl:col-span-6">
			<h2 class="text-4xl"><span class="text-primary block">Perguntas frequentes</span> que recebo em meu Instagram</h2>
			<img :src="QuestionSvg" width="350" />
		</div>
		<div class="col-span-6">
			<Question :key="question.question" :answer="question.answer" :question="question.question" v-for="question in questions" />
		</div>
	</section>
</template>
