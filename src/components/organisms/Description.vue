<script setup lang="ts">
import { ref } from "vue"

//images
import DevActivitySvg from "../../assets/illustrations/dev_activity.svg"
import OnlineTestSvg from "../../assets/illustrations/online_test.svg"
import StarSvg from "../../assets/illustrations/star.svg"
import PiggyBankSvg from "../../assets/illustrations/piggy-bank.svg"
import SealCheckSvg from "../../assets/illustrations/seal-check.svg"
import HandCoinsSvg from "../../assets/illustrations/hand-coins.svg"

//components
import DescriptionCard from "../molecules/DescriptionCard.vue"
import Badge from "../molecules/Badge.vue"
import Blur from "../molecules/Blur.vue"

const badges = ref([
	{
		iconSrc: StarSvg,
		title: "Vitalício",
		description: "Você terá acesso a todas a todas as atualizações agora e para sempre, basta acessar sua conta no Kiwify."
	},
	{
		iconSrc: PiggyBankSvg,
		title: "Reembolso",
		description: "Se você não gostar do conteúdo você tem até uma semana para pedir reembolso sem taxa."
	},
	{
		iconSrc: SealCheckSvg,
		title: "Certificado",
		description: "Ao concluir o guia, ganhe um certificado para exibir no seu currículo e demonstrar para os recrutadores"
	},
	{
		iconSrc: HandCoinsSvg,
		title: "Desconto na mentoria",
		description: "Ao adquirir o guia, você também ganha um desconto para uma mentoria particular com o autor do conteúdo."
	},

])

</script>

<template>
	<section id="description" class="flex flex-col gap-32 z-10">
		<article class="flex flex-col gap-16 items-center relative">
			<div class="left-1/4 absolute">
				<Blur />
			</div>
			<h2 class="text-5xl text-center">Tudo sobre <span class="text-primary">Node.js</span>, juntamente com as
				tecnologias mais <span class="text-primary">demandadas no mercado</span></h2>
			<p class="text-2xl text-silver max-w-3xl text-center">Tenha acesso a um guia completo que aborda desde
				lógica programação básica até o necessário para se tornar um desenvolvedor back-end
				profissional, pronto para atuar em diferentes projetos utilizando ferramentas de ponta.</p>
		</article>
		<div class="flex gap-32 relative">
			<div class="bottom-12 left-1/2 absolute">
				<Blur />
			</div>
			<DescriptionCard class="z-10" :img-src="DevActivitySvg" title="Conteúdo para todos"
				description="16 Módulos sobre desenvolvimento back-end escritos com uma linguagem descomplicada e descontraída, para qualquer aprender, indepentende do conhecimento prévio que possuir." />
			<DescriptionCard class="z-10" :img-src="OnlineTestSvg" title="Pratique enquanto estuda"
				description="Cada módulo contém diversos exercícios pra você aplicar o conteúdo aprendido, para assim exercitar o conteúdo e poder aproveitar 100% do material oferecido." />
		</div>
		<div class="flex justify-between w-full gap-12">
			<Badge :key="badge.title" :icon-src="badge.iconSrc" :title="badge.title"
				:description="badge.description" v-for="badge in badges" />
		</div>
	</section>
</template>
