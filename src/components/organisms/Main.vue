<script setup lang="ts">
import PromotionCard from '../molecules/PromotionCard.vue';
</script>

<template>
	<section class="xl:grid xl:grid-cols-12 gap-16 lg:gap-32 items-center flex flex-col-reverse mt-36 lg:mt-0">
		<PromotionCard />
		<article class="xl:col-span-6 flex flex-col gap-8">
			<p class="text-5xl">Aprenda programação <span class="text-primary">backend</span> do zero e faça parte do <span class="text-primary">1% mais desejado do mercado</span></p>
			<p class="text-silver text-lg lg:text-2xl">Aprenda as tecnologias necessárias para se tornar um profssional disputado pelas grandes empresas</p>
		</article>
	</section>
</template>
