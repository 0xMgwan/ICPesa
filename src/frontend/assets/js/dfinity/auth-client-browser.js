<html>

<head>
    <meta charset="utf8" />
    <title>Internet Computer - Error: canister error</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <style>
        html {
            min-height: 100%;
        }

        html,
        body {
            padding: 0;
            margin: 0;
        }

        body {
            text-align: center;
            font-size: 16px;
            padding: 5em 1em 1em;
            box-sizing: border-box;
            font-family: CircularXX, sans-serif;
            font-style: normal;
            font-weight: 700;
            color: #1c1e21;
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-between;
            background: rgb(241, 238, 245);
            background: linear-gradient(180deg,
                    rgba(241, 238, 245, 1) 68%,
                    rgba(60, 1, 186, 0.17) 100%);
        }

        h1,
        p {
            font-size: 24px;
            line-height: 32px;
        }

        h1 {
            font-size: 24px;
            line-height: 32px;
        }

        p {
            color: #181818;
            font-weight: 400;
            font-size: 16px;
            line-height: 17px;
        }

        .transparent {
            opacity: 0.6;
        }
    </style>
</head>

<body>
    <main>
        <!-- Logo -->
        <div>
            <h3 class="transparent">This app is powered by</h3>
            <div id="logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="86.33" height="74.33" fill="none" viewBox="0 0 259 223">
                    <g clip-path="url(#a)">
                        <path fill="url(#b)"
                            d="M188.498 0c-12.854 0-26.892 6.604-41.721 19.623-7.022 6.167-13.11 12.766-17.678 18.06.008.009.016.017.024.029a.245.245 0 0 1 .02-.024s7.206 7.86 15.136 16.274c4.269-5.082 10.436-12.018 17.527-18.24 13.182-11.578 21.792-14.005 26.692-14.005 18.49 0 33.531 14.693 33.531 32.75 0 17.957-15.049 32.638-33.555 32.75-.843 0-1.927-.104-3.262-.4 5.392 2.338 11.188 4.02 16.708 4.02 33.89 0 40.513-22.158 40.965-23.727a52.622 52.622 0 0 0 1.535-12.639C244.416 24.432 219.331 0 188.498 0Z" />
                        <path fill="url(#c)"
                            d="M70.107 108.926c12.854 0 26.892-6.604 41.721-19.623 7.022-6.167 13.11-12.767 17.678-18.06a.174.174 0 0 1-.024-.029c-.012.016-.02.024-.02.024s-7.206-7.86-15.136-16.274c-4.269 5.081-10.436 12.017-17.527 18.24C83.617 84.783 75.007 87.21 70.107 87.21c-18.49 0-33.53-14.693-33.53-32.75 0-17.957 15.048-32.638 33.554-32.75.843 0 1.927.104 3.261.4-5.391-2.338-11.187-4.02-16.707-4.02-33.89 0-40.513 22.157-40.965 23.727a52.612 52.612 0 0 0-1.535 12.639c.004 30.039 25.09 54.471 55.922 54.471Z" />
                        <path fill="#29ABE2"
                            d="M201.856 90.284c-17.351-.428-35.385-14.136-39.067-17.544-9.504-8.806-31.44-32.65-33.163-34.52C113.546 20.183 91.759 0 70.107 0h-.056c-26.32.132-48.44 17.989-54.323 41.824.452-1.57 9.097-24.148 40.937-23.363 17.351.429 35.473 14.32 39.15 17.729 9.506 8.806 31.449 32.654 33.164 34.524 16.08 18.033 37.867 38.212 59.519 38.212h.056c26.32-.132 48.44-17.989 54.323-41.824-.448 1.57-9.181 23.967-41.021 23.182Z" />
                        <path fill="#000"
                            d="M7.405 170a1.5 1.5 0 0 0 1.5-1.5v-25.36a1.5 1.5 0 0 0-1.5-1.5h-2.6a1.5 1.5 0 0 0-1.5 1.5v25.36a1.5 1.5 0 0 0 1.5 1.5h2.6ZM47.432 170a1.5 1.5 0 0 0 1.5-1.5v-25.36a1.5 1.5 0 0 0-1.5-1.5h-2.52a1.5 1.5 0 0 0-1.5 1.5v17.26L32.2 142.575a2 2 0 0 0-1.693-.935h-4.275a1.5 1.5 0 0 0-1.5 1.5v25.36a1.5 1.5 0 0 0 1.5 1.5h2.52a1.5 1.5 0 0 0 1.5-1.5v-18.62l12.29 19.198a2.001 2.001 0 0 0 1.684.922h3.206ZM84.09 146.88a1.5 1.5 0 0 0 1.5-1.5v-2.24a1.5 1.5 0 0 0-1.5-1.5H63.61a1.5 1.5 0 0 0-1.5 1.5v2.24a1.5 1.5 0 0 0 1.5 1.5h7.46v21.62a1.5 1.5 0 0 0 1.5 1.5h2.56a1.5 1.5 0 0 0 1.5-1.5v-21.62h7.46ZM115.017 170a1.5 1.5 0 0 0 1.5-1.5v-2.2a1.5 1.5 0 0 0-1.5-1.5h-10.74v-6.56h9.58a1.5 1.5 0 0 0 1.5-1.5v-1.92a1.5 1.5 0 0 0-1.5-1.5h-9.58v-6.48h10.74a1.5 1.5 0 0 0 1.5-1.5v-2.2a1.5 1.5 0 0 0-1.5-1.5h-14.76a1.5 1.5 0 0 0-1.5 1.5v25.36a1.5 1.5 0 0 0 1.5 1.5h14.76ZM144.703 169.18a1.5 1.5 0 0 0 1.337.82h2.761a1.5 1.5 0 0 0 1.328-2.196l-4.928-9.404c3.72-1.08 6.04-4.08 6.04-8.04 0-4.92-3.52-8.72-9.04-8.72h-9.58a1.5 1.5 0 0 0-1.5 1.5v25.36a1.5 1.5 0 0 0 1.5 1.5h2.56a1.5 1.5 0 0 0 1.5-1.5v-9.42h2.88l5.142 10.1Zm-8.022-14.86v-7.88h4.48c2.8 0 4.44 1.56 4.44 3.96 0 2.32-1.64 3.92-4.44 3.92h-4.48ZM188.216 170a1.5 1.5 0 0 0 1.5-1.5v-25.36a1.5 1.5 0 0 0-1.5-1.5h-2.52a1.5 1.5 0 0 0-1.5 1.5v17.26l-11.212-17.825a2 2 0 0 0-1.693-.935h-4.275a1.5 1.5 0 0 0-1.5 1.5v25.36a1.5 1.5 0 0 0 1.5 1.5h2.52a1.5 1.5 0 0 0 1.5-1.5v-18.62l12.29 19.198a2 2 0 0 0 1.684.922h3.206ZM221.835 170a1.5 1.5 0 0 0 1.5-1.5v-2.2a1.5 1.5 0 0 0-1.5-1.5h-10.74v-6.56h9.58a1.5 1.5 0 0 0 1.5-1.5v-1.92a1.5 1.5 0 0 0-1.5-1.5h-9.58v-6.48h10.74a1.5 1.5 0 0 0 1.5-1.5v-2.2a1.5 1.5 0 0 0-1.5-1.5h-14.76a1.5 1.5 0 0 0-1.5 1.5v25.36a1.5 1.5 0 0 0 1.5 1.5h14.76ZM257.239 146.88a1.5 1.5 0 0 0 1.5-1.5v-2.24a1.5 1.5 0 0 0-1.5-1.5h-20.48a1.5 1.5 0 0 0-1.5 1.5v2.24a1.5 1.5 0 0 0 1.5 1.5h7.46v21.62a1.5 1.5 0 0 0 1.5 1.5h2.56a1.5 1.5 0 0 0 1.5-1.5v-21.62h7.46ZM14.52 222.6c7.146 0 11.166-4.256 12.694-8.281.284-.747-.174-1.541-.939-1.772l-2.34-.707c-.8-.242-1.633.225-2.006.974-1.111 2.235-3.416 4.386-7.409 4.386-4.56 0-8.8-3.32-8.8-9.36 0-6.44 4.48-9.48 8.72-9.48 4.02 0 6.225 2.004 7.268 4.221.367.782 1.228 1.279 2.052 1.02l2.342-.739c.753-.238 1.202-1.022.928-1.763-1.53-4.146-5.511-8.059-12.59-8.059-7.6 0-14.44 5.76-14.44 14.8 0 9.04 6.6 14.76 14.52 14.76ZM41.154 207.8c0-6.4 4.48-9.44 8.84-9.44 4.4 0 8.88 3.04 8.88 9.44 0 6.4-4.48 9.44-8.88 9.44-4.36 0-8.84-3.04-8.84-9.44Zm-5.72.04c0 9.12 6.88 14.76 14.56 14.76 7.72 0 14.6-5.64 14.6-14.76 0-9.16-6.88-14.8-14.6-14.8-7.68 0-14.56 5.64-14.56 14.8ZM104.876 222a1.5 1.5 0 0 0 1.5-1.5v-24.86a2 2 0 0 0-2-2h-4.174a2 2 0 0 0-1.852 1.247l-7.814 19.233-8.007-19.248a2 2 0 0 0-1.847-1.232h-3.946a2 2 0 0 0-2 2v24.86a1.5 1.5 0 0 0 1.5 1.5h2.28a1.5 1.5 0 0 0 1.5-1.5v-18.22l7.777 18.793a1.5 1.5 0 0 0 1.386.927h2.591a1.5 1.5 0 0 0 1.388-.931l7.778-18.949v18.38a1.5 1.5 0 0 0 1.5 1.5h2.44ZM123.777 206.56v-8.12h4.36c2.76 0 4.44 1.56 4.44 4.08 0 2.44-1.68 4.04-4.44 4.04h-4.36Zm5.041 4.76c5.6 0 9.319-3.68 9.319-8.84 0-5.12-3.719-8.84-9.319-8.84h-9.101a1.5 1.5 0 0 0-1.5 1.5v25.36a1.5 1.5 0 0 0 1.5 1.5h2.521a1.5 1.5 0 0 0 1.5-1.5v-9.18h5.08ZM158.276 222.64c6.08 0 10.92-3.72 10.92-10.68v-16.82a1.5 1.5 0 0 0-1.5-1.5h-2.52a1.5 1.5 0 0 0-1.5 1.5v16.42c0 3.72-2.04 5.68-5.4 5.68-3.28 0-5.36-1.96-5.36-5.68v-16.42a1.5 1.5 0 0 0-1.5-1.5h-2.52a1.5 1.5 0 0 0-1.5 1.5v16.82c0 6.96 4.84 10.68 10.88 10.68ZM200.105 198.88a1.5 1.5 0 0 0 1.5-1.5v-2.24a1.5 1.5 0 0 0-1.5-1.5h-20.48a1.5 1.5 0 0 0-1.5 1.5v2.24a1.5 1.5 0 0 0 1.5 1.5h7.46v21.62a1.5 1.5 0 0 0 1.5 1.5h2.56a1.5 1.5 0 0 0 1.5-1.5v-21.62h7.46ZM227.031 222a1.5 1.5 0 0 0 1.5-1.5v-2.2a1.5 1.5 0 0 0-1.5-1.5h-10.74v-6.56h9.58a1.5 1.5 0 0 0 1.5-1.5v-1.92a1.5 1.5 0 0 0-1.5-1.5h-9.58v-6.48h10.74a1.5 1.5 0 0 0 1.5-1.5v-2.2a1.5 1.5 0 0 0-1.5-1.5h-14.76a1.5 1.5 0 0 0-1.5 1.5v25.36a1.5 1.5 0 0 0 1.5 1.5h14.76ZM252.717 221.18a1.5 1.5 0 0 0 1.337.82h2.761a1.5 1.5 0 0 0 1.328-2.196l-4.928-9.404c3.72-1.08 6.04-4.08 6.04-8.04 0-4.92-3.52-8.72-9.04-8.72h-11.08v26.86a1.5 1.5 0 0 0 1.5 1.5h2.56a1.5 1.5 0 0 0 1.5-1.5v-9.42h2.88l5.142 10.1Zm-8.022-14.86v-7.88h4.48c2.8 0 4.44 1.56 4.44 3.96 0 2.32-1.64 3.92-4.44 3.92h-4.48Z" />
                    </g>
                    <defs>
                        <linearGradient id="b" x1="159.39" x2="235.567" y1="7.182" y2="85.915"
                            gradientUnits="userSpaceOnUse">
                            <stop offset=".21" stop-color="#F15A24" />
                            <stop offset=".684" stop-color="#FBB03B" />
                        </linearGradient>
                        <linearGradient id="c" x1="99.215" x2="23.038" y1="101.744" y2="23.01"
                            gradientUnits="userSpaceOnUse">
                            <stop offset=".21" stop-color="#ED1E79" />
                            <stop offset=".893" stop-color="#522785" />
                        </linearGradient>
                        <clipPath id="a">
                            <path fill="#fff" d="M0 0h259v223H0z" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </div>

        <!-- Error Notice -->
        <div>
            <h1>502 - canister error</h1>
            <p>
                The response from the canister failed verification and cannot be trusted.<br />If you understand the risks, you can retry using the raw domain to bypass certification.
            </p>
        </div>
    </main>
</body>

</html>

