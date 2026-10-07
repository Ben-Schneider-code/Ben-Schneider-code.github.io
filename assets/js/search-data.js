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
          description: "Publications sorted in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-we-release-abc-a-model-fine-grained-multimodal-retrieval",
          title: 'We release ABC, a model fine-grained multimodal retrieval.',
          description: "",
          section: "News",},{id: "news-first-public-release-of-quickvideo-our-library-for-efficient-long-videollm-inference-quickvideo-is-an-ongoing-project-focused-on-improving-systems-and-models-for-videollms-please-provide-feedback-if-there-are-features-you-want-implemented",
          title: 'First public release of QuickVideo, our library for efficient (long) VideoLLM inference. QuickVideo...',
          description: "",
          section: "News",},{id: "news-abc-has-been-published-in-tmlr",
          title: 'ABC has been published in TMLR!',
          description: "",
          section: "News",},{id: "news-scholarcopilot-was-accepted-at-colm-2025-training-llms-to-do-academic-writing-with-citations-they-do-not-make-up",
          title: 'ScholarCopilot was accepted at COLM 2025! Training LLMs to do academic writing with...',
          description: "",
          section: "News",},{id: "news-i-have-been-battling-to-teach-an-agent-to-play-pokemon-emerald-for-a-few-months",
          title: 'I have been battling to teach an agent to play Pokemon Emerald for...',
          description: "",
          section: "News",},{id: "news-quickvideo-has-been-published-in-tmlr-what-started-as-a-systems-side-quest-for-faster-long-video-inference-ended-up-a-full-paper-on-system-algorithm-co-design",
          title: 'QuickVideo has been published in TMLR! What started as a systems side-quest for...',
          description: "",
          section: "News",},{id: "news-our-small-project-on-getting-agents-to-learn-in-long-horizon-games-turned-into-a-whole-year-long-endeavour-it-has-now-been-published-at-neurips-2026-check-it-out-here-if-you-are-interested-in-self-improvement-in-long-horizon-open-ended-worlds",
          title: 'Our “small project” on getting agents to learn in long-horizon games turned into...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},];
