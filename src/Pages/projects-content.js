/* 
    - Contains an array of JS objects which represent articles. Content
    is an array of strings which represent paragraphs inividually. There 
    are obviously better ways to do this, but this is a good place to start.
    - Makes our code more flexible and maintainable since we only have to change 
    one file to change something in the format of our article.
    - Notice that each of our projects have a name parameter, this is what 
    the unique string we'll use to match our URL parameters
    - And we also export our sample data at the bottom of the file to import
    into our ProjectsPage.
*/
const projects = [
    {
        name: 'sso-request',
        title: 'SSO Request Application',
        content: [
            `The SSO Request Application was a project I contributed towards while I was 
			employed as an Application Development intern at Pepperdine University University 
			(Information & Technology Department). The application consisted of a several form
			pages used to obtain relevant information from the user on applying for SSO 
			(Single-Sign-On) usage at the university.There is also a seperate view/interface
			created for authorized Application developers at the Univesity to use so that they
			may manage the requests made in the application.`,
            `The application was developed using Microsoft's ASP.NET MVC 5 framework with a 
			SQL server backend, and is currently in production at the university. 
			A barebones-level look at the application (without any proprietary information 
			from my previous employer) is avaliable on my github 
			(https://github.com/cameroncfranklin`,
            `Documentation for the application can be viewed here: sample.link             
			`,
        ]
    },    {
        name: 'task-updater',
        title: 'Twilio Task Updater Application',
        content: [
            `The Twilio Task Updater Application was a project I independetly developed while
			employed as an Application Development intern at Pepperdine University. `,
            `Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
            `Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
        ]
    },     {
        name: 'iris',
        title: 'My U.S. Patent: IRIS',
        content: [
            `As of January 2020, I became a joint patent holder of a mobile proximity security
			system called IRIS.`,
            `Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
            `Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
        ]
    },  
];

export default projects;