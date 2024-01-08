<script setup lang="ts">
import ButtonLink from "../atoms/ButtonLink.vue";
</script>

<template>
	<div class="bg-secondary p-8 shadow-container flex gap-8 flex-col col-span-6">
		<h2 class="text-3xl">Aproveite a promoção de apenas</h2>
		<div class="flex flex-col gap-2">
			<span class="text-2xl text-silver">10x de</span>
			<strong class="text-7xl">R$16,39</strong>
			<span class="text-2xl text-silver">ou R$139,90 à vista</span>
		</div>
		<ButtonLink hrefTo="https://links.umporcentoprogramador.com.br/" label="Quero me tornar um programador de sucesso" />
		<span class="text-silver text-xl text-center">Cartão de crédito, Boleto à vista e Pix</span>
	</div>
</template>
