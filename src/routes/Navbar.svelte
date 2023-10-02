<nav class="navigation">
	<ul class="nav-list">
		<li class="nav-item"><a href="/">Заклади</a></li>
		<span class="line" />
		<li class="nav-item"><a href="/cart">Кошик</a></li>
	</ul>
</nav>

<style>
	.nav-list {
		display: flex;
		/* align-items: center; */
		flex-direction: row;

		padding-top: 25px;
	}
	.line {
		content: "";
		height: 20px;
		width: 1px;
		background-color: #000;
	}
	ul {
		list-style: none;
	}
	li {
		margin: 0 10px;
	}
	a {
		color: #000;
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
		cursor: pointer;
	}
</style>
