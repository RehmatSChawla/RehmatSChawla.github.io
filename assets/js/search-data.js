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
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A collection of my projects, both academic and personal.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "My Curriculum Vitae, detailing my research, projects and other experiences.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-resources",
          title: "Resources",
          description: "My notes and collected resources for courses and self-study.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resources/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "dropdown-poetry",
              title: "Poetry",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "dropdown-photography",
              title: "Photography",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/photography/";
              },
            },{id: "dropdown-my-mind-in-media",
              title: "My Mind in Media",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/media-recos/";
              },
            },{id: "post-call-out-to-me-once-more",
        
          title: "Call out to me once more",
        
        description: "I miss college, the campus and the people.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/Call-out-to-me-once-more/";
          
        },
      },{id: "post-why-i-don-39-t-read-anymore",
        
          title: "Why I don&#39;t read anymore",
        
        description: "Regards, a non-practicing bookworm",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/Why-I-don't-read-anymore/";
          
        },
      },{id: "post-to-complain-of-undersea-rain",
        
          title: "To Complain of Undersea Rain",
        
        description: "A nonsense poem - I hope",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/To-Complain-of-Undersea-Rain/";
          
        },
      },{id: "post-i-live-for-stories",
        
          title: "I live for stories",
        
        description: "A homage to my many reasons to love life",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/I-live-for-stories-prose-version/";
          
        },
      },{id: "post-rap-and-poetry",
        
          title: "Rap and Poetry",
        
        description: "The two rhythmic genres are considered disjoint by many, but I want to explore their intersection.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/Rap-and-Poetry/";
          
        },
      },{id: "post-prisoner-of-my-mind",
        
          title: "Prisoner of my mind",
        
        description: "Would life not be a cakewalk if I could listen to myself?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/Prisoner-of-my-mind/";
          
        },
      },{id: "post-i-walk-away",
        
          title: "I walk away",
        
        description: "Ambition demands sacrifice",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/I-walk-away/";
          
        },
      },{id: "post-grocery-store-breakdown",
        
          title: "Grocery Store Breakdown",
        
        description: "Hunger at the core of the human condition",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/Grocery-Store-Breakdown/";
          
        },
      },{id: "post-fragile",
        
          title: "Fragile",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/Fragile/";
          
        },
      },{id: "post-bad-with-words",
        
          title: "Bad With Words",
        
        description: "I&#39;m supposed to be good with language, as a poet and avid reader. But I don&#39;t always feel that way.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/Bad-With-Words/";
          
        },
      },{id: "post-been-a-while",
        
          title: "Been a while",
        
        description: "Battling burnout",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/Been-a-while/";
          
        },
      },{id: "post-nuts-about-you",
        
          title: "Nuts about you",
        
        description: "Romance is a frequent theme in poetry, and I felt it was high time I gave it a go with my own flair.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/Nuts-about-you/";
          
        },
      },{id: "post-once-more-rise",
        
          title: "Once more, rise",
        
        description: "For the days when your failures feel overwhelming.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/Once-more-rise/";
          
        },
      },{id: "post-metered-metric-space",
        
          title: "Metered Metric Space",
        
        description: "A friend once challenged me saying that I couldn&#39;t mix poetry and math. I proved him wrong.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/metered-metric-space/";
          
        },
      },{id: "post-polyglottic-poetry",
        
          title: "Polyglottic Poetry",
        
        description: "A (barely) bilingual poem, hopefully the first of many.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sting-poem/";
          
        },
      },{id: "post-introduction",
        
          title: "Introduction",
        
        description: "Allow me to present a brief glimpse of myself.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/introduction-poem/";
          
        },
      },{id: "post-night-sky",
        
          title: "Night Sky",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/Night-Sky/";
          
        },
      },{id: "post-angry",
        
          title: "Angry",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/Angry/";
          
        },
      },{id: "post-sidelines",
        
          title: "Sidelines",
        
        description: "An ode to those outside the spotlight - or is it?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/Sidelines/";
          
        },
      },{id: "post-lathosphobia",
        
          title: "Lathosphobia",
        
        description: "What do you fear?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/Lathosphobia/";
          
        },
      },{id: "post-sin",
        
          title: "Sin",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/Sin/";
          
        },
      },{id: "post-about-writing-poems-on-spit",
        
          title: "About writing poems on spit",
        
        description: "Why do we write? Who do you write for?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/About-writing-poems-on-spit/";
          
        },
      },{id: "post-efficient",
        
          title: "Efficient",
        
        description: "I like to push myself to be productive. Does it work?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/Efficient/";
          
        },
      },{id: "post-shiver",
        
          title: "Shiver",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/Shiver/";
          
        },
      },{id: "post-strangling-lull",
        
          title: "Strangling lull",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/Strangling-lull/";
          
        },
      },{id: "post-i-39-m-a-poet",
        
          title: "I&#39;m a poet",
        
        description: "What does it mean, to write poetry? What does it mean to you, and to me?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/Im-a-poet/";
          
        },
      },{id: "post-glossy-black",
        
          title: "Glossy Black",
        
        description: "Prompted by a polaroid",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/Glossy-Black/";
          
        },
      },{id: "post-two-can-make-a-team",
        
          title: "Two can make a team",
        
        description: "The influence of children&#39;s fiction on my optimism is clear in this work.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/two-team-poem/";
          
        },
      },{id: "post-white-rose",
        
          title: "White Rose",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/White-Rose/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-condensed-matter-physics",
          title: 'Condensed Matter Physics',
          description: "Notes from my Condensed Matter course at IIT Bombay",
          section: "Projects",handler: () => {
              window.location.href = "/projects/CMP/";
            },},{id: "projects-differential-geometry",
          title: 'Differential Geometry',
          description: "Notes from my Differential Geometry course at Imperial",
          section: "Projects",handler: () => {
              window.location.href = "/projects/DiffGeom/";
            },},{id: "projects-electromagnetism",
          title: 'Electromagnetism',
          description: "Notes from my Electromagnetism course at IIT Bombay",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Electromagnetism/";
            },},{id: "projects-higher-form-gauge-theories",
          title: 'Higher Form Gauge Theories',
          description: "Various problems in higher-form electromagnetism using its democratic formulation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Higher_Form_Electromagnetism/";
            },},{id: "projects-large-colour-wilson-loops-using-matrix-models",
          title: 'Large-colour Wilson Loops using Matrix Models',
          description: "Studying large-colour Wilson loops in Super-Yang-Mills as a test of the AdS/CFT Correspondence.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Matrix_Models/";
            },},{id: "projects-statistical-mechanics",
          title: 'Statistical Mechanics',
          description: "Notes from my Statistical Mechanics course at IIT Bombay",
          section: "Projects",handler: () => {
              window.location.href = "/projects/StatMech/";
            },},{id: "projects-supersymmetry",
          title: 'Supersymmetry',
          description: "Notes from my Supersymmetry course at Imperial",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Supersymmetry/";
            },},{id: "projects-topological-quantum-field-theories",
          title: 'Topological Quantum Field Theories',
          description: "Topological Quantum Field Theories, specifically non-abelian Chern Simons theories, and their applications.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/TQFTs/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/RehmatSChawla", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/rehmat-singh-chawla-25b513221", "_blank");
        },
      },{
        id: 'social-stackoverflow',
        title: 'Stackoverflow',
        section: 'Socials',
        handler: () => {
          window.open("https://stackoverflow.com/users/13523523", "_blank");
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
