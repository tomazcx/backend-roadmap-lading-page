<script setup lang="ts">
import PromotionCard from '../molecules/PromotionCard.vue';
</script>

<template>
	<section class="grid grid-cols-12 gap-32 items-center">
		<PromotionCard />
		<article class="col-span-6 flex flex-col gap-8">
			<p class="text-5xl">Aprenda programação <span class="text-primary">backend</span> do zero e faça parte do <span class="text-primary">1% mais desejado do mercado</span></p>
			<p class="text-silver text-2xl">Aprenda as tecnologias necessárias para se tornar um profssional disputado pelas grandes empresas</p>
		</article>
	</section>
</template>
