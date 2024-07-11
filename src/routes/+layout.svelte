<header>
    <a href="/">Portfolio</a>
    <a href="/comic">Comic</a>

</header>
<slot></slot>
<footer>© 2024 morisummer</footer>

<style>
    header {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        height: 60px;
        background: rgba(255, 255, 255, 0);
        padding: 0 20px;
        box-sizing: border-box;
        position: fixed;
        top: 0;
        left: 0;
    }

    header a {
        background: rgba(255, 255, 255, 0);
        color: white;
        font-size: 16px;
        margin-right: 15px;
        cursor: pointer;
        transition: color 0.3s;
        border: 1px solid white;
        border-radius: 5px;
        padding: 10px 20px;
        text-decoration: none;
    }

    header a:hover {
        color: #ccc;
    }

    footer {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 60px;
        background: rgba(255, 255, 255, 0);
        color: white;
        position: fixed;
        bottom: 0;
        left: 0;
        opacity: 50%;
    }
</style>
