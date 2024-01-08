<script setup lang="ts">
import ButtonLink from "../atoms/ButtonLink.vue";
</script>

<template>
	<section class="w-full max-w-3xl rounded-lg bg-secondary p-12 shadow-container flex flex-col gap-8 text-center mx-auto">
		<h2 class="text-4xl">Compre agora e <span class="text-primary">faça parte do 1%</span></h2>
		<p class="text-silver text-xl">Tenha acesso ao guia completo para obter o conteúdo necessário para se tornar um dos desenvolvedores mais desejados do mercado</p>
		<ButtonLink hrefTo="https://links.umporcentoprogramador.com.br/" label="Quero me tornar um programador de sucesso" />
	</section>
</template>
