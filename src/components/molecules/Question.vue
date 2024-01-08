<script setup lang="ts">
import Caret from "../../assets/illustrations/caret.svg";
import {ref} from "vue"

defineProps<{
	question:string;
	answer:string;
}>()

const showQuestion = ref(false)
</script>

<template>
	<div class="border-t cursor-pointer hover:opacity-80 transition-opacity border-b border-secondary flex flex-col gap-6 py-4" @click="showQuestion = !showQuestion">
		<div class="flex justify-between items-center">
			<span class="text-2xl">{{question}}</span>
			<img :class="{'rotate-180': showQuestion}" :src="Caret" class="cursor-pointer" />
		</div>
		<p v-show="showQuestion" class="text-silver">{{answer}}</p>
	</div>
</template>
