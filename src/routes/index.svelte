<script lang="ts">
	import { SessionFactory } from '../factory/SessionFactory';
	import TimerComponent from '../components/timer.svelte';

	let sessionTypes = new SessionFactory().totalRules();
	let sessionTime: number = sessionTypes[0].limit;
	let sessionName: string = sessionTypes[0].name;

	function sessionStart(time: number, name: string) {
		sessionTime = time;
		sessionName = name;
	}
</script>

<body>
	<div class="flex place-content-center p-10 space-x-10">
		{#each sessionTypes as sessions}
			<button
				on:click={() => sessionStart(sessions.limit, sessions.name)}
				class="transition ease-in duration-700 p-2 bg-{sessions.color}-600 hover:bg-{sessions.hoverColor}-700 text-white font-bold py-2 px-4 rounded"
			>
				{sessions.name}
			</button>
		{/each}
	</div>

	<TimerComponent timeProp={sessionTime} sessionNameProp={sessionName} />
</body>
