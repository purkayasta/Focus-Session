<script lang="ts">
	import TimerComponent from '../components/timer.svelte';

	let sessionTime: Number;

	function sessionStart(time: Number) {
		console.log(time);
		sessionTime = time;
	}
</script>

<body>
	<div class="flex place-content-center p-10 space-x-10">
		<button
			on:click={() => sessionStart(45)}
			class="p-2 bg-purple-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
		>
			Office Session
		</button>
		<button
			on:click={() => sessionStart(15)}
			class="p-2 bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
		>
			Personal Session
		</button>
		<button
			on:click={() => sessionStart(25)}
			class="p-2 bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
		>
			Pomodoro Session
		</button>
	</div>

	<TimerComponent time={sessionTime} />
</body>
