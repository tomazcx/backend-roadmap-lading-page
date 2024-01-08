<script setup lang="ts">
import NodeSalaryCard from '../molecules/NodeSalaryCard.vue';
import Blur from '../molecules/Blur.vue';
</script>

<template>
	<section id="meanSalary" class="xl:grid xl:grid-cols-12 flex flex-col gap-32 relative">
		<div class="absolute">
			<Blur />
		</div>
		<article class="col-span-7 flex flex-col gap-8">
			<h2 class="text-5xl">Qual o <span class="text-primary">salário</span> médio de um desenvolvedor <span class="text-primary">Node.js</span>?</h2>
			<p class="text-silver">A carreira de um desenvolvedor Node.js é sinônimo de alta demanda e salários atrativos, refletindo a crescente importância desta tecnologia no mercado. Profissionais qualificados em nessa tecnologia são frequentemente bem remunerados, com salários variando conforme experiência e localização.</p>
		</article>
		<NodeSalaryCard />
	</section>
</template>
