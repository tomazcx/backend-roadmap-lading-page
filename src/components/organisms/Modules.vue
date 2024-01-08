<script setup lang="ts">
import Module from "../molecules/Module.vue";
import { firstColumnModules, secondColumnModules } from "../../utils/modules";
</script>

<template>
	<section id="content" class="flex flex-col gap-24">
		<div class="flex flex-col gap-12">
			<h2 class="text-5xl text-center">O que vou <span class="text-primary">aprender</span> ao longo do guia?</h2>
			<p class="text-silver text-2xl text-center">Abaixo contém uma lista de todos os módulos e conteúdos a serem abordados no guia.</p>
		</div>
		<div class="xl:grid xl:grid-cols-12 flex flex-col gap-16 xl:gap-32">
			<div class="xl:col-span-6 flex flex-col gap-16">
				<Module v-for="module in firstColumnModules" :key="module.title" :title="module.title" :content="module.content" />
			</div>
			<div class="xl:col-span-6 flex flex-col gap-16">
				<Module v-for="module in secondColumnModules" :key="module.title" :title="module.title" :content="module.content" />	
			</div>
		</div>
	</section>
</template>
