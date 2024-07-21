export type Icon = (props: IconProps) => React.JSX.Element;
type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  ubsLogo: (props: IconProps) => (
    <svg
      width="2500"
      height="961"
      viewBox="0 0 2500 961"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2268.18 783.506C2230.95 780.751 2190.77 771.393 2158.89 758.039C2151.68 755.02 2146.58 727.562 2142.95 726.182L2135.49 689.416C2134.51 656.661 2133.28 620.47 2132.75 609L2131.77 588.14H2158.48L2161.87 613.797C2174.56 709.647 2225.19 757.886 2313.08 757.886C2371.45 757.886 2407.64 735.993 2425.86 689.648C2431.55 675.192 2432.42 667.737 2432.54 632.699C2432.67 592.822 2432.57 592.178 2423.27 573.152C2406.95 539.767 2390.45 528.695 2308.25 495.963C2283.86 486.253 2254.9 473.77 2243.89 468.218C2172.1 432.041 2136.53 380.713 2136.68 313.498C2136.86 227.507 2184.74 165.441 2268.2 142.974C2297.26 135.158 2368.05 136.01 2398.35 144.549C2426.76 152.55 2464.32 167.423 2468.3 172.257C2470 174.318 2471.95 198.655 2472.82 228.803C2473.67 257.915 2474.83 288.531 2475.41 296.838L2476.46 311.942H2449.4L2443.46 281.645C2429.62 211.101 2397.15 173.919 2341.23 164.598C2295.96 157.051 2241.11 174.526 2219.5 203.364C2203.08 225.289 2198.13 242.463 2198.13 277.418C2198.13 305.21 2198.81 308.974 2206.62 324.486C2216.77 344.633 2231.19 357.811 2258.19 371.605C2277.11 381.268 2340.98 406.888 2346.16 406.888C2351.19 406.888 2408.57 435.495 2423.4 445.395C2464.66 472.936 2487.63 509.896 2495.82 561.881C2499.82 587.293 2500 595.767 2497.06 619.312C2490.38 672.659 2474.83 705.715 2442.01 736.318C2399.94 775.546 2348.7 789.456 2268.18 783.501V783.506ZM1253.15 779.616C1162.09 762.174 1119.04 714.249 1107.05 616.988C1105.2 601.967 1104.05 511.669 1104.05 381.787V170.965H1035.4V145.077H1261.37V170.799L1224.9 171.604L1188.43 172.41L1187.59 359.418C1186.5 602.754 1189.25 641.941 1210.45 685.254C1231.36 727.978 1271.77 749.259 1331.97 749.259C1400.26 749.259 1438.32 723.728 1458.85 664.153C1471.99 626.049 1473 605.917 1473.02 381.718L1473.03 170.97H1404.38V145.077H1570.28V170.97H1507.59L1506.69 400.415C1505.81 627.443 1505.73 630.106 1499.43 652.878C1480.82 720.158 1444.02 757.854 1380.07 775.134C1350.21 783.205 1284.06 785.543 1253.15 779.626L1253.15 779.616ZM1608.01 763.063L1608.89 750.695L1643.22 750.237L1677.54 749.783L1678.27 460.462L1679 171.146L1643.95 170.335L1608.9 169.53L1608.02 157.301L1607.14 145.077H1747.63C1836.47 145.077 1895.67 146.248 1908.68 148.272C1958.36 155.995 1992.28 177.934 2010.52 214.12C2026.25 245.329 2031.09 284.414 2023.75 320.925C2015.88 360.084 1999.64 384.223 1967.09 405.161C1945.08 419.307 1930.91 425.165 1903.51 431.434C1890.93 434.31 1879.56 437.574 1878.27 438.681C1876.97 439.792 1884.69 441.589 1895.43 442.677C2005.92 453.905 2054.32 502.594 2054.32 602.527C2054.32 657.545 2041.33 692.704 2009.13 724.862C1989.39 744.574 1965.43 757.668 1931.66 767.188C1910.08 773.277 1903.52 773.551 1758.18 774.477L1607.13 775.435L1608.01 763.063ZM1868.63 744.963C1917.46 732.173 1950.12 698.33 1960.97 649.28C1967.79 618.432 1965.46 561.886 1956.37 537.794C1945.33 508.498 1926.69 485.045 1903.98 471.843C1881.29 458.647 1864.83 455.795 1811.46 455.795H1761.92V749.255H1807.09C1837.9 749.255 1857.46 747.894 1868.63 744.963ZM1868.47 423.081C1915.77 407.717 1943.36 360.478 1942.88 295.671C1942.38 228.076 1908.22 179.439 1855.85 171.762C1847.45 170.535 1822.88 169.923 1801.26 170.405L1761.92 171.28V298.667C1761.92 368.734 1762.89 427.068 1764.07 428.299C1767.8 432.189 1853.65 427.896 1868.47 423.081Z"
        fill="#FC0101"
      />
      <path
        d="M438.304 954.223C429.298 951.607 429.006 951.042 429.006 936.012C429.006 920.801 428.825 920.463 419.713 918.685C402.705 915.37 373.4 901.909 359.712 891.12C309.287 851.391 292.011 789.261 314.714 729.334C329.23 691.013 369.283 656.753 412.6 645.603C433.53 640.218 432.539 634.189 410.415 632.337L393.255 630.897V602.128L411.128 601.272L429.006 600.415V527.185C429.006 486.91 428.404 453.956 427.677 453.956C426.941 453.956 405.372 471.111 379.739 492.078C354.105 513.044 329.605 532.973 325.294 536.367C320.984 539.761 317.474 543.646 317.497 544.998C317.52 546.355 321.9 552.638 327.235 558.968C336.644 570.141 336.796 570.711 332.342 578.309C329.823 582.616 324.211 587.385 319.881 588.899C312.658 591.432 311.051 590.538 300.638 578.194C292.451 568.488 288.395 565.59 286.121 567.822C283.834 570.077 285.482 576.323 292.122 590.598C300.059 607.652 301.448 614.181 302.578 639.727C303.647 663.976 302.823 672.658 297.915 688.879C284.413 733.469 252.093 765.975 207.752 779.555C191.638 784.491 183.234 785.302 160.554 784.116C128.994 782.463 110.787 776.328 85.0835 758.686C76.0543 752.486 67.6918 747.472 66.4925 747.536C65.2932 747.601 59.9405 751.417 54.5924 756.015C45.3872 763.933 44.4287 764.155 36.7654 760.168C28.8845 756.07 19.9802 742.897 19.9802 735.335C19.9802 733.275 24.7356 727.579 30.5468 722.671L41.118 713.744L33.4963 696.065C7.93811e-05 618.376 34.1168 533.538 110.291 505.089C124.09 499.935 132.823 498.819 157.276 499.088C192.624 499.472 209.965 504.895 239.475 524.801C262.826 540.544 268.605 537.918 252.931 518.679C242.322 505.649 242.156 505.094 246.624 497.611C249.152 493.379 254.69 488.646 258.932 487.086C265.988 484.493 267.66 485.419 278.467 497.856L290.279 511.456L351.78 461.285C385.601 433.693 413.272 409.768 413.272 408.115C413.272 406.466 386.244 383.18 353.211 356.37L293.141 307.626L285.274 315.155C275.17 324.832 275.346 330.505 285.992 338.418C296.466 346.211 296.535 347.595 287.02 358.968L279.472 367.997L270.438 359.19C259.64 348.66 258.464 348.517 251.361 356.856C239.771 370.47 239.683 372.289 250.287 379.55C255.746 383.287 260.219 387.792 260.228 389.551C260.251 393.316 249.287 407.934 246.453 407.916C243.855 407.897 190.397 364.922 189.328 361.982C188.865 360.713 202.052 352.198 218.643 343.058C235.233 333.922 248.805 325.448 248.805 324.226C248.805 323.003 245.087 319.341 240.54 316.086L232.274 310.163L204.399 326.046C189.064 334.779 176.048 341.451 175.469 340.872C174.895 340.293 178.789 325.995 184.118 309.094L193.814 278.362L186.503 272.578C182.484 269.397 177.969 267.207 176.474 267.707C174.973 268.207 169.352 282.747 163.981 300.014C158.61 317.285 153.701 331.922 153.076 332.551C151.919 333.709 94.349 287.22 94.349 285.127C94.349 282.376 107.106 266.948 109.379 266.948C110.764 266.948 116.417 270.421 121.941 274.658L131.989 282.367L140.343 273.375C144.936 268.43 148.696 263.48 148.696 262.373C148.696 261.266 143.927 256.219 138.102 251.154L127.507 241.939L134.527 233.026C143.13 222.098 144.297 221.982 154.938 230.988C159.614 234.943 164.411 238.179 165.606 238.179C168.366 238.179 183.063 221.69 182.891 218.783C182.817 217.579 171.936 208.184 158.707 197.899C131.934 177.086 129.827 172.155 141.667 157.995C156.531 140.228 142.417 131 311.732 269.147C403.266 343.826 425.779 361.894 427.32 361.894C428.247 361.894 429.006 328.879 429.006 288.526V215.162H400.404V243.93H374.659V215.162H346.057V243.93H320.312V166.334L333.902 171.729C341.376 174.692 355.758 180.498 365.857 184.633C375.956 188.768 385.295 192.144 386.596 192.144C387.897 192.144 388.958 187.291 388.944 181.355L388.925 170.566L357.082 157.921L325.234 145.27L357.101 132.444L388.962 119.618V108.413C388.962 102.245 388.346 97.2023 387.592 97.2023C386.837 97.2023 372.997 102.523 356.846 109.024L323.891 122.281C321.136 123.383 320.317 114.728 320.317 84.5614V45.416H346.062V74.1847H374.659V45.416H400.404V74.1847H429.006V8.23398L440.026 5.252C447.805 3.14517 453.704 3.19611 460.053 5.4187L469.054 8.57662V185.541C469.054 335.195 469.665 362.269 473.018 360.977C476.532 359.621 554.652 296.601 689.359 186.444C713.78 166.478 735.353 149.151 737.297 147.938C742.743 144.557 751.508 148.516 757.495 157.073C769.386 174.058 768.789 175.623 742.326 196.788C728.893 207.531 717.901 217.407 717.901 218.736C717.901 222.422 730.079 238.179 732.931 238.179C734.316 238.179 740.006 234.679 745.581 230.4L755.717 222.626L763.82 232.558L771.933 242.495L760.662 252.561L749.392 262.632L758.333 272.449C764.455 279.172 768.381 281.441 770.789 279.644C790.14 265.198 789.213 265.434 796.58 272.963C800.308 276.778 803.757 281.39 804.248 283.21C805.225 286.849 749.563 333.589 746.517 331.69C745.475 331.042 740.34 316.211 735.103 298.731C729.866 281.251 724.175 266.99 722.457 267.045C720.739 267.096 716.345 269.638 712.701 272.699L706.065 278.26L715.937 310.006C721.369 327.463 725.189 341.752 724.43 341.752C723.67 341.752 710.196 334.496 694.485 325.629L665.925 309.501L657.608 317.512L649.292 325.527L667.152 335.455C676.968 340.918 691.234 348.91 698.851 353.221L712.692 361.061L682.839 385.579L652.983 410.096L644.981 400.011L636.98 389.922L647.908 380.693L658.835 371.465L650.848 360.926C646.449 355.129 642.226 350.383 641.458 350.383C640.694 350.383 635.197 354.259 629.252 358.995L618.44 367.608L610.689 357.384L602.933 347.16L613.74 337.76L624.547 328.365L616.227 317.882C609.114 308.913 607.197 307.904 602.984 310.909C590.857 319.554 483.658 406.642 483.52 407.962C483.427 408.777 490.757 415.25 499.8 422.349C508.848 429.447 537.209 452.409 562.824 473.375C588.44 494.342 609.925 511.497 610.559 511.497C611.193 511.497 615.875 505.672 620.959 498.551C631.891 483.234 637.878 482.354 649.774 494.319L658.437 503.033L650.917 512.303C641.152 524.324 636.364 534.02 638.916 536.585C640.031 537.705 642.587 537.377 644.597 535.853C663.614 521.393 686.659 508.15 698.828 504.691C769.451 484.623 833.656 511.544 864.504 574.151L876.649 598.817V634.995C876.649 672.371 876.432 673.32 859.253 711.567C858.512 713.211 863.101 718.388 869.449 723.074C879.029 730.149 880.701 732.816 879.321 738.785C877.524 746.541 868.324 757.765 860.114 762.215C856.136 764.372 852.474 762.789 843.408 754.977L831.795 744.976L818.751 754.991C792.024 775.513 764.404 784.867 730.884 784.751C691.23 784.612 662.493 772.865 636.378 746.129C616.097 725.352 605.239 706.28 599.316 680.998C591.741 648.677 594.58 620.08 608.508 588.334C613.935 575.966 614.99 570.831 612.596 568.424C610.202 566.016 607.966 566.974 603.91 572.142C586.407 594.451 588.338 593.252 578.373 588.07C573.4 585.482 567.918 580.703 566.186 577.448C562.908 571.29 563.616 569.669 577.632 551.411L583.43 543.855L529.152 499.644C499.3 475.325 473.541 454.984 471.916 454.437C469.911 453.766 469.202 477.024 469.716 526.347L470.48 599.248L487.576 600.128C506.088 601.086 509.01 603.323 509.01 616.51C509.01 629.702 506.088 631.934 487.576 632.892C463.197 634.152 464.961 640.009 492.09 647.876C528.147 658.341 553.827 677.27 574.257 708.456C598.937 746.124 601.622 800.23 580.938 843.061C566.853 872.233 529.254 904.044 498.166 913.096C468.304 921.787 469.054 921.176 469.054 936.961C469.054 950.264 468.503 951.315 460.043 954.283C449.866 957.849 450.806 957.853 438.304 954.223ZM429.543 871.223C430.358 859.481 431.238 858.138 439.73 855.702C445.439 854.068 452.616 854.068 458.326 855.702C466.91 858.166 467.73 859.467 469.054 872.663C470.374 885.869 471.027 886.897 477.634 886.203C491.558 884.74 519.674 868.343 533.199 853.804C554.189 831.226 561.741 811.88 561.806 780.505C561.838 766.262 560.176 749.722 558.115 743.749C544.094 703.094 494.248 691.638 472.684 724.107C459.835 743.452 466.938 773.355 486.835 783.704C495.596 788.261 516.747 788.196 526.976 783.584C531.407 781.584 531.977 783.139 531.977 797.179C531.977 812.366 531.606 813.158 522.97 816.187C502.421 823.391 471.471 816.418 459.266 801.823C455.413 797.22 451.713 793.451 451.047 793.451C450.375 793.451 445.328 797.721 439.823 802.944C423.88 818.066 400.279 822.984 377.136 816.011L366.079 812.677V797.003C366.079 783.065 366.635 781.597 371.084 783.769C373.839 785.112 384.049 786.223 393.783 786.233C409.507 786.256 412.462 785.306 420.305 777.745C437.873 760.812 437.855 732.15 420.278 715.633C393.792 690.745 350.312 711.331 340.255 753.523C329.897 796.938 347.219 844.312 382.327 868.612C396.547 878.451 423.63 889.097 426.681 886.041C427.76 884.962 429.048 878.294 429.543 871.223ZM201.82 747.587C232.381 736.785 259.571 710.901 266.137 686.364C271.48 666.412 267.313 650.192 253.199 635.999C242.295 625.025 239.54 623.706 227.588 623.706C204.594 623.706 187.429 637.759 183.929 659.452C181.53 674.334 191.833 693.717 205.849 700.695L216.943 706.219L205.182 715.309C198.713 720.31 191.694 724.403 189.587 724.403C187.475 724.403 180.058 719.124 173.093 712.665C157.42 698.13 150.108 680.423 152.507 662.8L154.238 650.113L140.097 648.159C118.413 645.158 97.0346 627.239 88.6351 605.022C85.9078 597.808 86.6069 596.234 96.428 587.501C102.364 582.227 107.981 577.856 108.912 577.791C109.842 577.726 112.097 582.671 113.912 588.788C118.376 603.753 136.337 616.51 152.947 616.51C175.487 616.51 194.463 597.322 194.463 574.526C194.463 549.545 173.357 531.616 144.015 531.667C91.0382 531.755 45.1418 593.854 54.56 652.692C57.7781 672.788 64.0662 689.874 68.2428 689.874C69.7708 689.874 74.9291 686.577 79.6938 682.54C88.0331 675.483 88.6953 675.376 97.1828 679.794C102.035 682.317 108.185 688.976 110.847 694.592L115.69 704.807L105.017 714.642C99.1507 720.05 94.349 724.972 94.349 725.579C94.349 728.806 125.549 746.124 136.912 749.203C156.966 754.639 183.762 753.973 201.82 747.583V747.587ZM777.1 743.3C786.852 738.878 797.15 732.677 799.984 729.519C804.998 723.94 804.887 723.569 795.844 715.971C785.074 706.919 784.152 699.468 792.492 688.809C803.489 674.747 808.647 673.895 821.228 684.063L832.461 693.143L838.823 679.284C844.056 667.884 845.186 660.314 845.186 636.652C845.186 610.907 844.334 606.138 837.11 591.339C824.979 566.483 803.785 544.665 784.861 537.543C751.124 524.847 722.281 532.802 709.719 558.274C700.819 576.332 702.972 588.552 717.669 603.327C736.422 622.196 760.584 621.604 777.823 601.85C782.624 596.354 786.551 588.663 786.551 584.764C786.551 575.568 788.732 575.818 801.628 586.51C813.815 596.613 814.389 599.683 806.851 614.468C797.256 633.286 777.221 646.71 757.551 647.501L746.04 647.964L747.859 660.152C750.61 678.618 744.47 694.949 728.842 710.734C721.401 718.254 713.247 724.403 710.719 724.403C708.191 724.403 701.028 720.282 694.795 715.244L683.469 706.09L691.387 702.663C705.297 696.653 712.872 685.716 714.428 669.375C716.234 650.442 709.538 636.912 694.554 629.221C672.43 617.867 651.506 623.97 639.008 645.422C621.816 674.932 638.267 715.003 676.931 737.799C697.203 749.745 711.474 753.204 736.492 752.232C754.087 751.546 763.473 749.481 777.1 743.3Z"
        fill="currentColor"
      />
    </svg>
  ),
};