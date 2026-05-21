// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "publications in reverse chronological order",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-news",
          title: "News",
          description: "research and professional updates",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-honors-and-awards",
          title: "Honors and Awards",
          description: "honors, scholarships, and awards in reverse chronological order",
          section: "Navigation",
          handler: () => {
            window.location.href = "/honors/";
          },
        },{id: "nav-professional-activities",
          title: "Professional Activities",
          description: "academic service and reviewing activities",
          section: "Navigation",
          handler: () => {
            window.location.href = "/service/";
          },
        },{id: "news-a-first-authored-paper-etd-an-efficient-time-delay-attack-detection-framework-for-uav-networks-has-been-published-in-ieee-transactions-on-information-forensics-and-security-tifs-core-a-ccf-a-sci-q1",
          title: 'A first-authored paper ETD: An Efficient Time Delay Attack Detection Framework for UAV...',
          description: "",
          section: "News",},{id: "news-my-postgraduate-thesis-research-on-routing-protocol-for-multi-hop-unmanned-aerial-vehicle-ad-hoc-networks-in-chinese-is-now-available",
          title: 'My postgraduate thesis Research on Routing Protocol for Multi-hop Unmanned Aerial Vehicle Ad-hoc...',
          description: "",
          section: "News",},{id: "news-a-co-authored-paper-hbc-combining-lossy-and-lossless-hybrid-bilayer-compression-framework-on-time-series-data-has-been-accepted-by-the-21st-ieee-international-symposium-on-parallel-and-distributed-processing-with-applications-ispa-2023-ccf-c-congratulations-to-wanying",
          title: 'A co-authored paper HBC: Combining Lossy and Lossless Hybrid Bilayer Compression Framework on...',
          description: "",
          section: "News",},{id: "news-a-co-authored-paper-osis-obstacle-sensitive-and-initial-solution-first-path-planning-has-been-accepted-by-the-29th-ieee-international-conference-on-parallel-and-distributed-systems-icpads-2023-ccf-c-congratulations-to-kaibin",
          title: 'A co-authored paper OSIS: Obstacle-Sensitive and Initial-Solution-First Path Planning has been accepted by...',
          description: "",
          section: "News",},{id: "news-i-have-been-awarded-a-tuition-fee-scholarship-from-unsw-sydney-i-appreciate-prof-xue-s-support-and-look-forward-to-pursuing-my-ph-d-at-unsw-sydney-2025-qs-world-university-rankings-19",
          title: 'I have been awarded a Tuition Fee Scholarship from UNSW Sydney. I appreciate...',
          description: "",
          section: "News",},{id: "news-my-postgraduate-thesis-research-on-routing-protocol-for-multi-hop-unmanned-aerial-vehicle-ad-hoc-networks-in-chinese-was-recognized-as-an-outstanding-postgraduate-thesis-of-jiangsu-province-and-an-outstanding-postgraduate-thesis-of-jiangsu-computer-society",
          title: 'My postgraduate thesis Research on Routing Protocol for Multi-hop Unmanned Aerial Vehicle Ad-hoc...',
          description: "",
          section: "News",},{id: "news-a-co-authored-paper-osis-obstacle-sensitive-and-initial-solution-first-path-planning-has-been-published-in-peer-to-peer-networking-and-applications-ppna-ccf-c-congratulations-to-kaibin",
          title: 'A co-authored paper OSIS: Obstacle-Sensitive and Initial-Solution-first path planning has been published in...',
          description: "",
          section: "News",},{id: "news-a-co-authored-paper-ddc-efficient-dynamic-dictionary-based-compression-on-floating-time-series-data-has-been-accepted-by-the-23rd-ieee-international-symposium-on-parallel-and-distributed-processing-with-applications-ispa-2025-ccf-c-congratulations-to-keyue",
          title: 'A co-authored paper DDC: Efficient Dynamic-Dictionary-Based Compression on Floating Time Series Data has...',
          description: "",
          section: "News",},{id: "news-a-co-first-authored-paper-esta-an-efficient-spatial-temporal-range-aggregation-query-processing-algorithm-for-uav-networks-has-been-published-in-ieee-transactions-on-network-science-and-engineering-tnse-ccf-c",
          title: 'A co-first-authored paper ESTA: An Efficient Spatial-Temporal Range Aggregation Query Processing Algorithm for...',
          description: "",
          section: "News",},{id: "projects-etd",
          title: 'ETD',
          description: "An Efficient Time Delay attack detection scheme (ETD) to detect time delay attack in UAV networks",
          section: "Projects",handler: () => {
              window.location.href = "/projects/etd/";
            },},{id: "projects-feds3a",
          title: 'FedS3A',
          description: "A Federated Semi-Supervised and Semi-asynchronous learning (FedS3A) for anomaly detection in IoT networks",
          section: "Projects",handler: () => {
              window.location.href = "/projects/feds3a/";
            },},{id: "projects-hotd",
          title: 'HOTD',
          description: "A Holistic cross-layer Time Delay attack detection framework (HOTD) to detect time delay attack in UAV networks",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hotd/";
            },},{id: "projects-par",
          title: 'PAR',
          description: "A Power-Aware Routing (PAR) algorithm to optimize energy consumption in delay-constrained UAV networks",
          section: "Projects",handler: () => {
              window.location.href = "/projects/par/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV_WenbinZhai.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%77%65%6E%62%69%6E.%7A%68%61%69@%63%6F%6E%6E%65%63%74.%70%6F%6C%79%75.%68%6B", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=EdaBuI4AAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-3229-5889", "_blank");
        },
      },{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/318/6454", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Wenbin-Zhai/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
