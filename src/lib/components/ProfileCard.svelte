<script lang="ts">
	import type { Profile } from '$lib/types';
	import SocialsIcons from '$lib/components/SocialsIcons.svelte';

	const { name, nickname, description, links, avatar, projects }: Profile = $props();
</script>

<div class="card">
	<div class="card-inner">
		<img src={avatar} class="profile-img" alt="Avatar" />
		<h1 class="name">{name}</h1>
		<p class="nickname">{nickname}</p>
		<p class="bio">{description}</p>
		<ul class="job-history st-steps compact">
			{#each projects as project, i}
				<li>
					<span class="step-icon {i === 0 ? 'green' : 'lightgray'}"></span>
					<span class="step-content {i === 0 ? 'current' : ''}">{project}</span>
				</li>
			{/each}
		</ul>
		<SocialsIcons {...links} />
		<div style="margin-top: 20px">
			<button class="button-main" onclick={() => (window.location.href = '/comic')}
				>See a comic
			</button>
		</div>
	</div>
</div>

<style>
	.card {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		width: 500px;
		height: 500px;
		padding: 30px 70px;
		text-align: center;
		border-radius: 30px;
		background: #3c3c46;
		box-shadow:
			inset 40px 40px 80px #33333c,
			inset -40px -40px 80px #454551;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.card-inner {
		width: 100%;
		height: fit-content;
	}

	.profile-img {
		border-radius: 50%;
		width: 100px;
		height: 100px;
		object-fit: cover;
		margin-bottom: 15px;
		box-shadow: 0 4px 8px rgba(255, 255, 255, 0.3);
	}

	.name {
		font-size: 24px;
		color: #fff;
	}

	.nickname {
		font-size: 16px;
		font-weight: 300;
		font-style: normal;
		margin-bottom: 10px;
		color: rgba(255, 255, 255, 0.5);
	}

	.bio {
		font-size: 16px;
		font-weight: 300;
		font-style: normal;
		margin-bottom: 20px;
		color: rgba(255, 255, 255, 0.7);
	}

	.job-history {
		margin-bottom: 20px;
	}

	.st-steps {
		list-style: none;
		margin: 0;
		padding: 0;
		width: 500px;
	}

	.st-steps li {
		display: flex;
		position: relative;
		font-size: 14px;
		color: #777;
		margin-bottom: 5px;
	}

	.st-steps li .step-icon {
		flex-shrink: 0;
		width: 30px;
		height: 30px;
		line-height: 30px;
		border-radius: 50%;
		background: gray;
		color: #fff;
		display: inline-block;
		text-align: center;
	}

	.st-steps li .step-icon.green {
		background: #039100;
	}

	.st-steps li .step-icon.lightgray {
		background: #a8a8a8;
	}

	.st-steps li .step-content {
		color: rgba(255, 255, 255, 0.7);
		font-weight: 100;
		font-style: normal;
	}

	.st-steps li .step-content.current {
		color: #fff;
		font-weight: 300;
		font-style: normal;
	}

	.st-steps li .step-content:after {
		content: '';
		display: block;
		position: absolute;
		border-left: 1px solid #d3d3d3;
	}

	.st-steps li:last-child :after {
		display: none;
	}

	.st-steps.compact .step-icon {
		color: #fff;
		width: 18px;
		height: 18px;
		line-height: 16px;
		top: 6px;
		left: 6px;
		position: relative;
	}

	.st-steps.compact .step-content {
		padding: 5px 0 5px 15px;
	}

	.st-steps.compact .step-content:after {
		top: 24px;
		left: 14.5px;
		height: calc(100% - 12px);
	}

	@keyframes wave {
		0% {
			opacity: 1;
			transform: translate3d(-50%, -50%, 0) scale3d(1, 1, 1);
		}
		100% {
			opacity: 0;
			transform: translate3d(-50%, -50%, 0) scale3d(4, 4, 1);
		}
	}

	@media screen and (max-width: 700px) {
		.card,
		.card-inner {
			width: 100vw;
			height: 100vh;
			overflow: hidden;
		}

		.card-inner {
			width: 100%;
			height: fit-content;
		}

		.card {
			padding: 30px 20px;
			border-radius: 0;
		}
	}

	.button-main {
		background: #33333c;
		color: #fff;
		border: 2px solid #212127;
		border-radius: 5px;
		padding: 10px 20px;
		font-size: 16px;
		cursor: pointer;
		transition:
			background 0.3s,
			color 0.3s;
		position: relative;
	}
</style>
