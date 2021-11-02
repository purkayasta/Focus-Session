<script lang="ts">
	import { SessionFactory } from '../factory/SessionFactory';
	import TimerComponent from '../components/timer.svelte';

	let sessionTypes = new SessionFactory().totalRules();
	let sessionTime: number = sessionTypes[0].limit;
	let sessionName: string = sessionTypes[0].name;
	let activeTab: number = 0;

	$: isTimerStarted = false;

	function sessionStart(time: number, name: string, index: number) {
		activeTab = index;
		sessionTime = time;
		sessionName = name;
	}
</script>

<svelte:head>
	<title>Focus Session ⌚🙏</title>
</svelte:head>

<body class="bg-white dark:bg-black">
	<div class="flex place-content-center p-10 space-x-2">
		{#each sessionTypes as sessions, index}
			<li
				class="cursor-pointer py-2 px-4 text-gray-500 dark:text-white border-b-8 {isTimerStarted
					? 'disabled'
					: ''}"
				class:selected={activeTab === index}
				on:click={() => sessionStart(sessions.limit, sessions.name, index)}
			>
				{sessions.name}
			</li>
		{/each}
	</div>

	<TimerComponent timeProp={sessionTime} sessionNameProp={sessionName} bind:isTimerStarted />
</body>

<style>
	.selected {
		color: green;
		border: 1px solid green;
	}
	.disabled {
		pointer-events: none;
		opacity: 0.6;
	}
</style>
