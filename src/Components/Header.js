import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Inicio
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                Nosotros
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Historia
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Proyectos
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Respaldo
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <div className="responsive-headline">
                <svg
                  width="339"
                  height="119"
                  viewBox="0 0 339 119"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.9147 109.857C20.4533 109.944 18.9027 109.912 17.2653 109.751C15.6267 109.589 13.9987 109.265 12.38 108.791C10.76 108.316 9.2 107.652 7.7 106.797C6.2 105.941 4.87733 104.873 3.73333 103.596C2.588 102.319 1.67867 100.815 1.00667 99.0919C0.336001 97.3679 0 95.3893 0 93.1626C0 90.9333 0.552001 88.9466 1.656 87.1853C2.76133 85.4253 4.20267 83.8626 5.97733 82.4893C7.752 81.1159 9.75333 79.9146 11.9827 78.8733C14.2107 77.8319 16.4187 76.9399 18.6093 76.2066C20.7987 75.4746 22.8707 74.8893 24.8227 74.4573C26.776 74.0239 29.6453 73.6186 29.6453 73.6186C29.664 73.5586 28.3387 72.3639 27.824 71.5893C27.38 70.9213 26.932 70.0813 26.5587 69.0919C26.188 68.1026 26 66.9426 26 65.6146C26 64.08 26.5493 62.5413 27.6467 60.9879C28.744 59.4346 30.1933 58.0199 31.9987 56.7293C33.804 55.4413 35.8813 54.3213 38.2307 53.3573C40.58 52.3933 42.9987 51.7279 45.4867 51.3679C48.012 51.0013 50.076 50.9533 51.6747 51.2479C53.2747 51.5439 54.5293 51.9813 55.4373 52.5693C56.3453 53.1586 56.9787 53.7919 57.3333 54.4719C57.6893 55.1519 57.8653 55.6653 57.8653 56.0093C57.8653 56.3893 57.7853 56.6693 57.628 56.8519C57.4707 57.0346 57.2827 57.1626 57.0667 57.2333C56.8493 57.3053 56.66 57.3106 56.5027 57.2506C56.3453 57.1906 56.2973 57.0386 56.2667 56.9546C56.0867 56.468 55.0227 55.8546 54.0747 55.4586C53.2467 55.112 52.1387 54.86 50.7573 54.6973C49.376 54.536 47.5987 54.616 45.428 54.928C43.4533 55.212 41.7267 55.8093 40.2467 56.7213C38.7667 57.6346 37.5293 58.632 36.544 59.7253C35.556 60.8186 34.816 61.904 34.3227 62.9853C33.8307 64.0653 33.5827 64.9133 33.5827 65.5279C33.5827 66.9306 33.7587 68.0639 34.1147 68.9319C34.4707 69.7986 34.9147 70.5026 35.448 71.0399C35.9813 71.5799 36.5533 71.9666 37.1653 72.2026C37.7773 72.4399 38.352 72.6213 38.884 72.7453C39.416 72.8679 39.8613 72.9613 40.2173 73.0199C40.572 73.0786 40.748 73.1759 40.748 73.3133C40.748 73.5519 40.7293 73.8013 40.6907 74.0639C40.6507 74.3266 40.4427 74.5946 40.068 74.8626C39.692 75.1319 39.0507 75.3893 38.1427 75.6333C37.2333 75.8773 35.912 76.0999 34.1747 76.2866C30.392 76.6906 27.0253 77.4359 24.072 78.5519C21.1173 79.6693 18.6373 81.0066 16.6293 82.5933C14.6213 84.1799 13.084 85.9506 12.0213 87.9239C10.9573 89.8973 10.424 91.9466 10.424 94.0813C10.424 95.8106 10.6707 97.4546 11.164 99.0159C11.6573 100.576 12.388 101.953 13.356 103.14C14.324 104.325 15.508 105.245 16.9093 105.893C18.3107 106.543 19.9013 106.815 21.6773 106.707C23.0587 106.623 24.144 106.488 24.9347 106.312C25.724 106.136 26.3187 105.94 26.712 105.749C27.1373 105.543 27.5107 105.173 27.4813 105.076C27.4693 105.036 27.3493 104.856 27.304 104.629C27.272 104.467 27.2347 104.196 27.216 103.823C27.1947 103.448 27.1853 102.939 27.1853 102.289C27.1853 101.643 27.332 101.076 27.624 100.593C27.916 100.108 28.24 99.6626 28.5907 99.3093C29 98.8973 29.9973 98.2159 29.9973 98.2159C30.012 98.2279 29.7213 99.1466 29.76 99.7199C29.8 100.297 29.9147 100.847 30.0573 101.337C30.2267 101.92 30.5787 103.125 30.7133 103.172C30.8973 103.237 31.9427 102.468 32.4427 102.044C32.8787 101.675 33.2787 101.187 33.6373 100.621C33.996 100.057 34.1747 99.3999 34.1747 98.6479C34.1747 97.8959 34.016 97.3706 33.696 97.0773C33.3773 96.7853 33.0253 96.5706 32.6733 96.4839C32.2507 96.3786 31.232 96.5146 31.232 96.5146C31.2107 96.4879 31.6093 95.8693 31.8867 95.5853C32.112 95.3573 32.4427 95.1319 32.84 94.9053C33.2373 94.6799 33.732 94.5373 34.3293 94.4773C35.48 94.3613 36.472 94.6133 37.3053 95.2426C38.14 95.8733 38.5573 97.0053 38.5573 98.6506C38.5573 99.3693 38.3693 100.093 37.9947 100.819C37.6187 101.544 37.136 102.228 36.544 102.871C35.9507 103.513 35.3 104.128 34.5893 104.711C33.8787 105.293 32.54 106.087 32.516 106.237C32.4413 106.708 34.9453 108.908 36.3667 109.947C37.788 110.985 39.268 111.804 40.808 112.405C42.348 113.005 43.8773 113.368 45.3973 113.493C46.916 113.616 48.3933 113.477 49.7507 113.041C50.416 112.828 50.964 112.573 51.3787 112.311C51.7933 112.047 52.12 111.791 52.3573 111.552C52.6333 111.273 52.9707 110.847 52.948 110.745C52.9173 110.604 52.5453 110.201 52.5653 109.82C52.5853 109.437 52.6827 109.133 52.86 108.903C53.0373 108.671 53.2467 108.577 53.4827 108.629C53.72 108.681 53.9213 109.031 54.0747 109.66C54.236 110.321 54.212 111.015 54.0147 111.732C53.8173 112.449 53.4213 113.169 52.8307 113.889C52.2373 114.608 51.4387 115.283 50.432 115.916C49.424 116.548 48.1453 117.099 46.612 117.567C44.9587 118.073 43.3133 118.173 41.6947 117.84C40.076 117.505 38.5173 116.885 37.0173 115.992C35.5173 115.097 34.1053 113.963 32.7827 112.595C31.4587 111.225 29.7907 108.308 29.2587 108.159C29.0453 108.099 27.9813 108.7 27.244 108.935C26.5773 109.145 25.7933 109.347 24.9053 109.511C24.0173 109.675 23.02 109.791 21.9147 109.857Z"
                    fill="white"
                  />
                  <path
                    d="M66.6861 98.4276C65.2835 98.6729 64.1021 98.4396 63.1421 97.7369C62.1821 97.0356 61.4795 96.1289 61.0381 95.0209C60.5981 93.9143 60.4408 92.7023 60.5715 91.3863C60.6995 90.0703 61.9341 87.8543 61.9341 87.8543C61.9341 87.8543 58.4155 92.4783 56.7155 94.4209C55.9875 95.2529 55.2381 96.0716 54.4595 96.8676C53.6808 97.6636 52.8981 98.3809 52.1195 99.0116C51.3408 99.6436 50.5901 100.168 49.8635 100.582C49.1355 101 48.4861 101.245 47.9141 101.321C47.0835 101.432 46.2648 101.4 45.4608 101.224C44.6555 101.048 43.9421 100.693 43.3195 100.169C42.6955 99.6436 42.2155 98.9529 41.8795 98.0889C41.5421 97.2263 41.4341 96.1263 41.5288 94.8143C41.5848 94.0463 41.9675 92.9569 42.6955 91.5596C43.4221 90.1623 44.3181 88.6063 45.3835 86.8849C46.4461 85.1649 47.5901 83.3356 48.8101 81.3996C50.0301 79.4649 51.1715 77.5769 52.2368 75.7396C53.2995 73.9036 54.1968 72.1876 54.9248 70.5983C55.6501 69.0103 56.0528 67.6436 56.1701 66.5556C56.2155 66.1436 56.6261 65.9143 57.3781 65.8796C58.1301 65.8449 58.9341 66.0236 59.7915 66.4209C60.6475 66.8196 61.4168 67.4462 62.0915 68.3036C62.7661 69.1622 63.0741 70.3089 62.9475 71.6623C62.8608 72.5729 62.3248 73.9196 61.3888 75.6476C60.4555 77.3756 59.3381 79.2556 58.0408 81.2809C56.7421 83.3076 55.4048 85.3556 54.0288 87.4209C52.6528 89.4876 51.4715 91.3449 50.4861 93.0009C49.4995 94.6556 48.8355 95.9796 48.4981 96.9729C48.1608 97.9663 48.4355 98.4063 49.3181 98.2863C49.6301 98.2423 50.4861 97.5516 51.8875 96.1956C53.2888 94.8409 54.9515 93.0903 56.8728 90.9289C58.7941 88.7689 60.8315 86.3556 62.9875 83.6889C65.1408 81.0223 67.1395 78.3609 68.9835 75.7143C70.8248 73.0689 72.3715 70.6023 73.6181 68.3236C74.8635 66.0449 75.5128 64.1956 75.6435 62.8809C75.6848 62.4676 76.0728 62.2689 76.7728 62.3063C77.4728 62.3449 78.2408 62.5849 79.0701 63.0262C79.9008 63.4676 80.6275 64.1596 81.2501 65.1009C81.8741 66.0436 82.1195 67.2249 82.0288 68.6089C81.9688 69.5262 81.4848 70.8769 80.5501 72.6263C79.6155 74.3796 78.5248 76.2743 77.2795 78.3089C76.0328 80.3423 74.7341 82.4009 73.3835 84.4849C72.0341 86.5703 70.8648 88.4289 69.8795 90.0663C68.8928 91.7076 68.2301 93.0196 67.8928 94.0129C67.5541 95.0089 67.7768 95.4383 68.5568 95.2983C68.9715 95.2249 69.6328 94.7943 70.5421 94.0116C71.4501 93.2303 72.5275 92.1876 73.7728 90.8769C75.0195 89.5676 76.3835 88.0596 77.8635 86.3449C79.3435 84.6343 80.8488 82.8262 82.3808 80.9262C83.9115 79.0262 85.3915 77.1049 86.8195 75.1636C88.2475 73.2249 89.5541 71.3356 90.6768 69.5196C90.9368 69.0983 91.2595 68.7902 91.6488 68.6089C92.0381 68.4276 92.3621 68.3756 92.6221 68.4543C92.8808 68.5316 93.0235 68.7409 93.0501 69.0796C93.0768 69.4183 92.8688 69.9156 92.4661 70.5596C92.2048 70.9796 91.5435 71.9542 90.4808 73.4556C89.4155 74.9583 88.1301 76.7249 86.6248 78.7489C85.1181 80.7729 83.4568 82.8903 81.6395 85.0969C79.8221 87.3036 78.0061 89.3609 76.1888 91.2676C74.3715 93.1769 72.6315 94.7903 70.9701 96.1223C69.3088 97.4529 67.8795 98.2196 66.6861 98.4276Z"
                    fill="white"
                  />
                  <path
                    d="M93.7121 60.2733C93.7121 60.9186 93.7775 61.4413 93.9081 61.8493C94.0375 62.256 94.2241 62.5986 94.4135 62.868C94.6241 63.1666 95.0668 63.6786 95.1148 63.6693C95.6508 63.5653 97.3735 59.5453 98.4628 57.6226C99.5535 55.7013 100.451 54.0066 101.152 52.5426C101.852 51.0786 102.307 49.936 102.515 49.124C102.723 48.312 102.487 47.9906 101.812 48.1586C101.137 48.328 100.345 48.8946 99.4375 49.8546C98.5281 50.816 97.6455 51.9293 96.7881 53.1946C95.9321 54.4613 95.2041 55.7493 94.6081 57.064C94.0108 58.3786 93.7121 59.4453 93.7121 60.2733ZM121.669 100.828C122.029 100.18 122.421 99.9426 122.837 100.116C123.044 100.203 123.303 100.424 123.305 100.553C123.321 101.209 122.119 102.615 121.203 103.592C120.423 104.421 119.375 105.269 118.051 106.083C116.727 106.896 115.051 107.551 113.027 108.04C111.001 108.528 108.86 108.62 106.601 108.319C104.343 108.016 102.265 107.245 100.371 106.019C98.4761 104.792 96.9161 103.057 95.6975 100.824C94.4761 98.588 93.8681 95.7933 93.8681 92.44C93.8681 90.0026 94.2441 87.4706 94.9975 84.8386C95.7495 82.208 96.6721 79.6346 97.7628 77.124C98.8521 74.6133 100.008 72.268 101.228 70.084C102.448 67.9 104.461 64.588 104.461 64.588C104.439 64.5666 101.813 66.1626 99.9441 67.0733C98.0748 67.9853 96.0215 68.7013 93.7908 69.2173C93.2175 69.3506 92.5948 69.404 91.9201 69.3746C91.2455 69.3453 90.5961 69.0906 89.9735 68.612C89.3508 68.1333 88.8321 67.3653 88.4175 66.3133C88.0028 65.2613 87.7935 63.7933 87.7935 61.912C87.7935 59.2066 88.2988 56.6173 89.3121 54.1346C90.3241 51.6546 91.5815 49.42 93.0881 47.4293C94.5935 45.44 96.1908 43.7733 97.8788 42.4346C99.5655 41.0973 101.083 40.2546 102.435 39.912C103.887 39.5426 105.135 39.6133 106.172 40.1306C107.211 40.6466 107.732 41.6213 107.732 43.0506C107.732 43.744 107.575 44.5813 107.264 45.5626C106.952 46.544 106.536 47.6093 106.017 48.7573C105.497 49.9053 104.916 51.0813 104.267 52.2826C103.617 53.484 102.955 54.6546 102.281 55.788C100.673 58.4933 96.9055 64.2786 96.9055 64.2786C96.9348 64.308 100.62 61.672 102.28 60.4893C103.671 59.4973 105.032 58.54 106.329 57.6133C107.628 56.6866 108.487 56.044 108.903 55.712C109.413 55.3013 109.939 54.8826 110.459 54.4453C110.977 54.012 111.599 53.9306 112.249 54.2266C112.556 54.3653 113.107 54.6506 113.885 55.048C114.664 55.4466 115.364 55.9573 115.987 56.58C116.609 57.2053 117.013 57.9466 117.195 58.8013C117.376 59.6586 117.005 60.6453 116.143 61.752C115.257 62.8906 114.027 64.6666 112.444 67.016C110.859 69.364 109.301 72.0106 107.771 74.9546C106.239 77.8973 104.916 80.9893 103.8 84.2306C102.683 87.4746 102.123 90.588 102.123 93.584C102.123 96.5813 102.54 98.9533 103.369 100.696C104.199 102.44 105.212 103.728 106.407 104.555C107.601 105.383 108.897 105.848 110.299 105.952C111.701 106.056 112.973 105.968 114.116 105.691C116.451 105.123 118.189 104.356 119.333 103.399C120.475 102.441 121.252 101.577 121.669 100.828"
                    fill="white"
                  />
                  <path
                    d="M143.007 72.1762C142.434 72.3349 141.902 72.3856 141.411 72.3349C140.919 72.2842 140.304 72.0096 140.202 72.0376C140.015 72.0882 139.607 72.9429 139.347 73.1816C139.263 73.2576 139.142 73.4002 139.036 73.5456C138.948 73.6682 138.814 73.8189 138.684 73.9936C138.554 74.1696 138.414 74.3922 138.256 74.6016C136.574 76.8629 134.36 78.9989 132.182 80.9309C130.002 82.8669 127.079 84.0856 125.642 85.1056C125.591 85.1416 125.512 85.2109 125.41 85.2376C125.202 85.2909 125.07 85.3442 125.019 85.4042C124.707 85.4856 124.552 85.5269 124.242 85.6069C123.463 85.8096 122.591 85.9202 121.632 85.9349C120.672 85.9496 119.764 85.7536 118.907 85.3456C118.051 84.9376 117.338 84.2389 116.766 83.2482C116.195 82.2589 115.91 80.8349 115.91 78.9816C115.91 76.8962 116.284 74.7149 117.038 72.4349C117.79 70.1549 118.803 67.8989 120.075 65.6602C121.347 63.4229 122.799 61.2482 124.435 59.1349C126.07 57.0202 127.756 55.1056 129.496 53.3936C131.235 51.6802 132.96 50.2336 134.674 49.0536C136.387 47.8736 137.946 47.0829 139.347 46.6856C141.528 46.0669 143.394 46.0842 144.951 46.7376C146.511 47.3922 147.782 48.3296 148.768 49.5469C148.924 49.7376 148.767 50.0882 148.3 50.5962C147.834 51.1042 146.718 51.6096 144.952 52.1109C142.826 52.7149 140.694 53.9362 138.567 55.7696C136.438 57.6042 134.467 59.6936 132.648 62.0322C130.832 64.3722 129.236 66.7962 127.86 69.3069C126.484 71.8162 125.434 74.0816 124.707 76.1082C123.979 78.1376 123.658 79.7589 123.735 80.9682C123.812 82.1802 124.423 82.6336 125.566 82.3336C126.707 82.0349 128.031 81.2696 129.536 80.0309C131.042 78.7922 132.467 77.4269 133.819 76.0162C135.396 74.3709 138.55 71.6309 138.646 70.5709C138.658 70.4282 138.37 69.9042 138.256 69.4856C138.167 69.1496 138.074 68.7189 138.023 68.2189C137.972 67.7229 137.946 67.1442 137.946 66.4882C137.946 65.0882 138.347 63.7869 139.152 62.5829C139.956 61.3776 140.838 60.4896 141.798 59.9162C142.759 59.3429 143.642 59.1896 144.446 59.4536C145.251 59.7189 145.654 60.5749 145.654 62.0269C145.654 62.6829 145.316 63.6456 144.643 64.9109C143.966 66.1776 141.659 69.0962 141.759 69.5722C141.766 69.6056 142.088 69.6816 142.424 69.7042C142.759 69.7282 143.032 69.7109 143.24 69.6522C144.174 69.3949 145.107 68.8176 146.042 67.9256C146.978 67.0336 147.99 65.8349 149.078 64.3349C150.17 62.8322 151.347 61.0456 152.62 58.9696C153.895 56.8949 155.338 54.5456 156.866 51.9442C157.127 51.4976 157.45 51.1509 157.84 50.9202C158.228 50.6922 158.554 50.6096 158.814 50.6762C159.072 50.7416 159.215 50.9629 159.242 51.3309C159.267 51.7016 159.06 52.2296 158.658 52.9096C158.396 53.3549 157.995 54.0989 157.45 55.1242C156.906 56.1496 156.23 57.3189 155.424 58.6296C154.618 59.9416 153.726 61.3349 152.739 62.8109C151.752 64.2869 150.727 65.6682 149.664 66.9496C148.602 68.2322 147.496 69.3482 146.356 70.2976C145.212 71.2482 144.095 71.8749 143.007 72.1762Z"
                    fill="white"
                  />
                  <path
                    d="M157.878 73.0298C158.657 72.8112 159.822 71.8525 161.381 70.1405C162.938 68.4325 164.626 66.3645 166.443 63.9378C168.261 61.5125 170.09 58.9152 171.933 56.1418C173.774 53.3712 175.346 50.8378 176.645 48.5472C177.941 46.2578 178.837 44.3992 179.33 42.9765C179.823 41.5538 179.654 40.9632 178.823 41.2032C178.201 41.3845 177.226 42.1045 175.902 43.3632C174.578 44.6232 173.127 46.1912 171.543 48.0658C169.959 49.9405 168.323 52.0272 166.638 54.3272C164.951 56.6285 163.406 58.9098 162.005 61.1685C160.602 63.4298 159.461 65.5632 158.578 67.5765C157.695 69.5885 157.254 71.2792 157.254 72.6405C157.254 72.7352 157.281 72.8232 157.333 72.9032C157.437 73.0618 157.618 73.1032 157.878 73.0298ZM177.187 67.3938C177.759 67.2338 178.889 66.2565 180.575 64.4538C182.261 62.6538 184.183 60.4165 186.338 57.7445C188.49 55.0738 190.699 52.1712 192.957 49.0378C195.214 45.9045 197.173 42.7938 198.911 40.0392C199.205 39.5752 199.559 39.2245 199.922 39.0032C200.286 38.7832 200.611 38.7045 200.897 38.7685C201.182 38.8312 201.337 39.0538 201.363 39.4272C201.39 39.8018 201.182 40.3365 200.779 41.0218C200.517 41.4685 199.859 42.5085 198.795 44.1165C197.731 45.7258 196.433 47.6152 194.902 49.7805C193.371 51.9472 191.682 54.2525 189.841 56.6938C187.997 59.1352 186.169 61.4178 184.351 63.5392C182.534 65.6618 180.795 67.4752 179.135 68.9805C177.473 70.4885 176.045 71.4085 174.851 71.7418C173.917 72.0032 173.021 72.1005 172.166 72.0325C171.311 71.9645 170.557 71.6685 169.907 71.1418C169.258 70.6152 168.726 69.8192 168.311 68.7578C167.897 67.6965 167.687 64.6138 167.687 64.6138C167.573 64.5778 164.757 68.7418 163.406 70.4205C162.227 71.8872 160.978 73.2685 159.707 74.5645C158.434 75.8632 157.385 76.6258 156.554 76.8578C155.723 77.0885 154.825 77.1845 153.867 77.1458C152.906 77.1072 152.013 76.8525 151.182 76.3792C150.35 75.9058 149.662 75.1912 149.117 74.2405C148.571 73.2912 148.299 72.0192 148.299 70.4232C148.299 68.8312 148.766 66.9445 149.701 64.7565C150.634 62.5712 151.87 60.2872 153.402 57.9032C154.931 55.5205 156.658 53.1418 158.578 50.7778C160.498 48.4138 162.434 46.2418 164.379 44.2618C166.326 42.2818 168.182 40.6058 169.946 39.2405C171.71 37.8738 173.215 37.0112 174.462 36.6472C175.81 36.2525 176.955 36.1445 177.89 36.3232C178.823 36.5018 179.598 36.7592 180.145 37.1205C180.763 37.5285 181.626 38.7552 181.626 38.7552C182.451 38.7565 187.607 27.9498 190.113 23.3218C191.183 21.3458 192.254 19.3552 193.266 17.3698C194.278 15.3845 195.185 13.5472 195.991 11.8592C196.795 10.1698 197.445 8.70582 197.938 7.46449C198.433 6.22315 198.678 5.33782 198.678 4.81249C198.678 4.24049 199.027 3.75649 199.729 3.36182C200.429 2.96582 201.182 2.87782 201.986 3.09782C202.791 3.31782 203.543 3.96049 204.243 5.02582C204.945 6.08982 205.295 7.77249 205.295 10.0685C205.295 11.1205 204.817 12.7632 203.857 14.9978C202.895 17.2312 201.649 19.8205 200.118 22.7632C198.586 25.7058 196.859 28.8832 194.939 32.2898C193.019 35.6965 191.099 39.0898 189.179 42.4672C187.259 45.8445 185.427 49.0725 183.69 52.1512C181.95 55.2352 180.485 57.9365 179.291 60.2632C178.097 62.5912 177.278 64.4112 176.838 65.7178C176.397 67.0258 176.514 67.5832 177.187 67.3938Z"
                    fill="white"
                  />
                  <path
                    d="M217.364 24.2641C218.506 23.9574 219.547 24.0761 220.479 24.6214C221.412 25.1667 222.154 25.8521 222.698 26.6721C223.243 27.4921 223.58 28.2801 223.711 29.0414C223.839 29.8014 223.698 30.2347 223.282 30.3427C221.776 30.7347 219.999 31.8041 217.948 33.5521C215.898 35.3014 213.823 37.3734 211.72 39.7654C209.618 42.1587 207.591 44.6787 205.644 47.3187C203.698 49.9587 202.09 52.3654 200.818 54.5321C199.546 56.7001 198.703 58.4401 198.288 59.7507C197.872 61.0601 198.131 61.5841 199.064 61.3294C199.376 61.2441 200.038 60.6601 201.051 59.5734C202.063 58.4867 203.231 57.1441 204.556 55.5414C205.88 53.9401 207.255 52.2081 208.683 50.3401C210.11 48.4721 211.406 46.7334 212.574 45.1281C213.742 43.5227 214.676 42.1454 215.378 40.9987C216.078 39.8534 216.386 39.1454 216.274 38.9614C216.111 38.6907 216.232 38.4694 216.779 38.3241C217.323 38.1814 217.976 38.1987 218.728 38.3867C219.478 38.5734 220.18 38.9934 220.828 39.6414C221.476 40.2907 221.802 41.2654 221.802 42.5641C221.802 43.8627 221.438 45.3667 220.711 47.0681C219.984 48.7694 219.232 50.3561 218.454 51.8307C217.674 53.3054 217.079 54.5161 216.664 55.4627C216.247 56.4121 216.352 56.8054 216.975 56.6454C217.598 56.4841 218.714 55.5254 220.322 53.7667C221.931 52.0107 223.75 49.8267 225.775 47.2227C227.799 44.6174 229.902 41.7801 232.083 38.7081C234.262 35.6361 236.186 32.5761 237.924 29.8547C238.216 29.3974 238.572 29.0574 238.936 28.8481C239.299 28.6414 239.622 28.5721 239.908 28.6507C240.192 28.7281 240.351 28.9601 240.378 29.3401C240.403 29.7214 240.215 30.2747 239.794 30.9307C239.5 31.3894 238.819 32.4081 237.807 33.9814C236.795 35.5534 235.56 37.4001 234.107 39.5147C232.652 41.6347 231.044 43.8854 229.279 46.2761C227.512 48.6667 225.744 50.9001 223.98 52.9774C222.215 55.0547 220.528 56.8174 218.92 58.2641C217.311 59.7134 215.911 60.5934 214.718 60.9014C213.938 61.1027 213.158 61.0654 212.379 60.7894C211.6 60.5134 210.927 60.1147 210.356 59.5947C209.787 59.0747 209.318 58.5014 208.955 57.8814C208.592 57.2601 208.41 56.7347 208.41 56.3041C208.41 55.8734 208.475 55.3854 208.604 54.8481C208.734 54.3107 208.874 53.7987 209.032 53.3347C209.228 52.7587 209.734 51.5681 209.734 51.5681C209.715 51.5574 206.095 56.2734 204.439 58.2987C203.038 60.0121 201.638 61.6134 200.236 63.0907C198.834 64.5681 197.768 65.4054 197.042 65.6027C196.314 65.8014 195.534 65.8094 194.704 65.6321C193.874 65.4547 193.083 65.1107 192.332 64.6041C191.58 64.0974 190.955 63.4041 190.462 62.5161C189.968 61.6307 189.723 60.5427 189.723 59.2587C189.723 57.8801 190.202 56.1174 191.164 53.9667C192.124 51.8187 193.382 49.5147 194.939 47.0521C196.498 44.5894 198.276 42.0894 200.275 39.5494C202.272 37.0121 204.295 34.6681 206.347 32.5214C208.396 30.3747 210.382 28.5601 212.302 27.0761C214.222 25.5934 215.911 24.6547 217.364 24.2641Z"
                    fill="white"
                  />
                  <path
                    d="M252.644 51.9237C251.137 52.2397 249.878 51.6464 248.866 50.1411C247.854 48.6371 247.348 46.5037 247.348 43.7371C247.348 42.9611 247.516 42.0371 247.854 40.9664C248.192 39.8971 248.634 38.7571 249.178 37.5437C249.724 36.3304 250.333 35.0651 251.008 33.7517C251.682 32.4384 252.38 31.1344 253.11 29.8651C254.805 26.9224 258.876 20.5344 258.876 20.5344C258.857 20.5077 257.55 21.4211 256.149 22.9371C254.746 24.4531 253.122 26.3371 251.28 28.5891C249.437 30.8411 247.504 33.3131 245.477 36.0051C243.453 38.6957 241.596 41.2691 239.91 43.7197C238.222 46.1717 236.821 48.3197 235.704 50.1584C234.588 51.9984 234.03 53.2144 234.03 53.8051C234.03 55.1851 233.757 55.9877 233.212 56.2157C232.666 56.4424 232.056 56.2931 231.381 55.7677C230.708 55.2437 230.097 54.4024 229.552 53.2464C229.005 52.0904 228.733 50.7864 228.733 49.3411C228.733 48.3757 229.109 47.0771 229.862 45.4451C230.614 43.8117 231.562 42.0104 232.705 40.0397C233.846 38.0704 235.093 36.0037 236.444 33.8384C237.793 31.6731 239.04 29.5864 240.182 27.5704C241.324 25.5557 242.272 23.6584 243.024 21.8811C243.777 20.1051 244.154 18.6091 244.154 17.3971C244.154 16.7677 244.452 16.3944 245.049 16.2784C245.645 16.1637 246.296 16.3384 246.997 16.8064C247.698 17.2744 248.348 18.0731 248.944 19.1984C249.541 20.3251 249.84 21.7904 249.84 23.5877C249.84 24.5104 249.697 25.3584 249.412 26.1251C249.125 26.8944 248.837 27.6157 248.516 28.1837C248.14 28.8491 247.192 30.1584 247.192 30.1584C247.194 30.1597 252.305 24.2411 254.59 21.8131C255.57 20.7717 256.55 19.7331 257.51 18.7011C258.472 17.6704 259.382 16.7504 260.238 15.9371C261.096 15.1251 261.861 14.4531 262.534 13.9251C263.208 13.3984 263.704 13.1024 264.016 13.0384C264.689 12.9024 265.301 12.9891 265.845 13.2957C266.392 13.6024 266.846 14.0771 267.209 14.7131C267.572 15.3491 267.857 16.0904 268.065 16.9304C268.273 17.7717 268.377 18.6317 268.377 19.5104C268.377 20.0984 267.936 21.2224 267.053 22.8811C266.17 24.5424 265.078 26.4491 263.781 28.6077C262.482 30.7677 261.12 33.0051 259.693 35.3171C258.265 37.6291 257.005 39.7384 255.914 41.6437C254.825 43.5491 254.032 45.1024 253.538 46.3011C253.045 47.4984 253.112 48.0317 253.733 47.9011C254.876 47.6624 256.394 46.6437 258.29 44.8464C260.185 43.0517 262.213 40.8584 264.368 38.2717C266.521 35.6851 268.689 32.8704 270.869 29.8304C273.05 26.7904 275.046 23.8917 276.71 21.1557C276.972 20.7264 277.296 20.4051 277.685 20.2157C278.074 20.0277 278.397 19.9837 278.658 20.0877C278.917 20.1904 279.06 20.4357 279.086 20.8237C279.113 21.2131 278.905 21.7411 278.505 22.3957C278.242 22.8251 277.594 23.8237 276.556 25.3731C275.516 26.9237 274.257 28.7344 272.777 30.8091C271.297 32.8837 269.662 35.1024 267.872 37.4611C266.081 39.8224 264.261 42.0264 262.42 44.0704C260.576 46.1157 258.81 47.8677 257.122 49.3251C255.434 50.7837 253.941 51.6517 252.644 51.9237Z"
                    fill="white"
                  />
                  <path
                    d="M281.308 46.6815C279.334 46.9841 277.685 46.9321 276.361 46.5121C275.036 46.0935 273.973 45.3895 273.169 44.4015C272.364 43.4148 271.78 42.2215 271.416 40.8188C271.053 39.4148 270.869 37.8561 270.869 36.1428C270.869 35.0175 271.206 33.5628 271.882 31.7775C272.557 29.9921 273.44 28.0975 274.53 26.0935C275.621 24.0895 276.854 22.0601 278.23 20.0121C279.606 17.9641 281.008 16.1001 282.437 14.4201C283.865 12.7401 285.252 11.3415 286.602 10.2241C287.953 9.10678 289.149 8.47479 290.188 8.32412C290.758 8.24145 291.238 8.32012 291.628 8.56012C292.017 8.80012 292.364 9.08012 292.602 9.38545C292.864 9.72145 293.225 10.6281 293.225 10.6281C293.226 10.6281 293.405 10.2108 293.769 9.81745C294.132 9.42412 294.522 9.00145 294.938 8.54945C295.353 8.10012 295.742 7.64279 296.106 7.17612C296.469 6.70945 296.65 6.28012 296.65 5.88412C296.65 5.54012 296.82 5.39345 297.157 5.44812C297.494 5.50412 297.885 5.77479 298.325 6.26412C298.765 6.75212 299.157 7.47079 299.494 8.41612C299.832 9.36412 300 10.5801 300 12.0628C300 14.1375 299.728 15.7015 299.182 16.7548C298.637 17.8081 298.025 18.7361 297.352 19.5335C296.677 20.3321 296.068 21.2108 295.522 22.1681C294.976 23.1255 295.069 26.0015 294.705 26.4148C294.388 26.7748 292.184 26.3121 291.354 25.5641C290.525 24.8161 289.905 23.9415 289.485 22.9801C288.981 21.8281 288.473 18.9868 288.473 18.9868C288.268 18.9228 285.202 23.0428 283.877 25.2108C282.729 27.0881 281.696 29.2121 280.761 31.5228C279.826 33.8321 279.361 36.1655 279.361 38.5215C279.361 40.2401 279.802 41.3681 280.684 41.9175C281.565 42.4655 282.528 42.6655 283.566 42.5108C283.981 42.4481 284.684 42.0108 285.669 41.2041C286.656 40.3988 287.81 39.3481 289.134 38.0575C290.458 36.7681 291.913 35.2801 293.498 33.5975C295.081 31.9161 296.664 30.1428 298.248 28.2761C299.832 26.4121 301.364 24.5201 302.842 22.6068C304.324 20.6921 305.62 18.7908 306.778 17.1175C307.07 16.6935 307.425 16.3975 307.789 16.2388C308.152 16.0815 308.477 16.0615 308.764 16.1828C309.049 16.3055 309.205 16.5681 309.23 16.9588C309.257 17.3521 309.046 17.8681 308.645 18.4975C308.384 18.9095 307.685 19.8775 306.542 21.3748C305.401 22.8735 304.012 24.6215 302.377 26.6255C300.741 28.6308 298.949 30.7735 297.002 33.0548C295.056 35.3361 293.108 37.4521 291.16 39.4095C289.213 41.3655 287.384 43.0228 285.669 44.3761C283.956 45.7281 282.502 46.4988 281.308 46.6815Z"
                    fill="white"
                  />
                  <path
                    d="M322.665 14.5005C322.355 14.5165 321.912 14.7671 321.341 15.2471C320.769 15.7258 320.16 16.3605 319.512 17.1445C318.861 17.9311 318.161 18.8191 317.409 19.8125C316.656 20.8085 315.897 21.8071 315.189 22.8005C313.468 25.2138 309.657 31.0525 309.657 31.0525C309.707 31.1018 314.592 27.5205 316.513 25.5765C318.435 23.6351 319.968 21.8445 321.109 20.1885C322.251 18.5325 322.952 17.1645 323.213 16.0805C323.472 14.9978 323.288 14.4685 322.665 14.5005ZM335.597 16.0431C335.888 15.6431 336.247 15.3778 336.609 15.2498C336.973 15.1231 337.295 15.1311 337.581 15.2805C337.865 15.4311 338.024 15.7071 338.051 16.1058C338.076 16.5058 337.865 17.0098 337.465 17.6085C337.203 18.0005 336.504 18.8991 335.363 20.2858C334.221 21.6711 332.793 23.2898 331.081 25.1485C329.367 27.0111 327.469 28.9845 325.392 31.0818C323.316 33.1791 321.197 35.1191 319.044 36.9058C316.889 38.6925 314.787 40.2085 312.736 41.4485C310.684 42.6898 308.775 43.4485 307.167 43.5338C305.816 43.6058 304.517 43.2805 303.428 42.6951C302.495 42.1938 301.636 41.3791 300.856 40.2511C300.077 39.1245 299.688 37.4018 299.688 35.0791C299.688 32.8551 300.156 30.5658 301.091 28.2125C302.025 25.8605 303.233 23.5778 304.713 21.3711C306.193 19.1658 307.84 17.0831 309.657 15.1351C311.475 13.1845 313.255 11.4738 314.995 9.99915C316.733 8.52448 318.357 7.36715 319.863 6.52581C321.368 5.68448 322.563 5.24315 323.445 5.19515C323.964 5.16848 324.537 5.25115 325.16 5.44581C325.781 5.64048 326.367 6.02848 326.912 6.60315C327.456 7.17915 327.924 8.00848 328.313 9.09248C328.703 10.1765 328.9 11.6165 328.9 13.4138C328.9 14.6111 328.481 15.9351 327.652 17.3871C326.821 18.8391 325.756 20.2991 324.459 21.7765C323.161 23.2538 321.717 24.7058 320.135 26.1378C318.549 27.5698 316.992 28.8605 315.46 30.0098C313.929 31.1578 312.527 32.0951 311.253 32.8165C309.981 33.5391 308.605 33.8031 308.335 33.9898C307.885 34.3031 307.536 35.8591 307.4 36.6031C307.283 37.2405 307.36 37.8191 307.593 38.2938C307.828 38.7685 308.465 38.9618 309.504 38.8751C310.801 38.7671 312.567 37.9671 314.8 36.4978C317.031 35.0285 319.409 33.1965 321.929 31.0071C324.445 28.8191 326.923 26.4071 329.364 23.7685C331.805 21.1298 333.863 18.4351 335.597 16.0431"
                    fill="white"
                  />
                  <path
                    d="M73.0606 21.2674L76.0606 14.6007L79.7273 21.2674H86.0606L81.0606 26.9341L83.0606 32.9341L77.0606 30.6007L71.0606 34.9341V27.6007L65.7273 21.9341L73.0606 21.2674Z"
                    fill="#53C6D4"
                  />
                  <path
                    d="M156.822 10.164L161.395 -9.23872e-07L166.986 10.164H176.642L169.018 18.8027L172.068 27.9507L162.92 24.3933L153.772 31V19.82L145.642 11.18L156.822 10.164Z"
                    fill="#F9AB1B"
                  />
                  <path
                    d="M123.809 31.6098L126.658 25.2778L130.141 31.6098H136.157L131.407 36.9925L133.307 42.6912L127.609 40.4752L121.909 44.5912V37.6258L116.843 32.2432L123.809 31.6098Z"
                    fill="#F9AB1B"
                  />
                </svg>
              </div>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>
                Servicios Lounge Eurodance es una empresa 100% mexicana, fundada
                y establecida en la cd. de Veracruz, Veracruz para atender las
                necesidades crecientes del mercado mexicano en el área general
                del Proveedor de Productos e insumos Alimenticios.
              </h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href="#about" className="button btn project-btn">
                  Nosotros
                </a>
                <a href="#portfolio" className="button btn github-btn">
                  Proyectos
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
