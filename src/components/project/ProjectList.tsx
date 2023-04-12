const config: { [key: string]: any } = require('../../../my.config.js');


export interface Project {
    name: string,
    description: string,
    thumbnail: string,
    github: string,
    url?: string,
}

export function ProjectList() {
    const projectList: Project[] = config.PROJECTS ?? [];

    return (
        <div className="mt-20">
            <h1 className="text-4xl mb-6 text-center">
                My Projects
            </h1>
            <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4 my-5 ">
                {projectList.map((el) => {
                    return (
                        <div className="max-w-sm shadow shadow-blue-500/40 hover:shadow-indigo-500/40 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
                            <a href={el.github}>
                                <img className="rounded-t-lg h-48 w-full grayscale hover:grayscale-0 duration-700 object-cover" src={el.thumbnail} alt="img" />
                            </a>
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{el.name}</h5>
                                <p className="line-clamp-4 mb-3 font-normal text-gray-700 dark:text-gray-400">{el.description}</p>
                                <a href={el.github} target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black focus:ring-4 focus:outline-none">
                                    <svg className="w-6 h-6 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g fill="#181616"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z" /><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0" /></g></svg>
                                </a>
                                {el.url && <a href={el.url} target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black focus:ring-4 focus:outline-none">
                                    <svg className="w-6 h-6 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><circle fill="" cx="63.624" cy="64.474" r="22.634" /><path fill="" d="M64 37h54.186c-9.944-20-30.64-33.633-54.562-33.633-19.367 0-36.619 9.173-47.764 23.271l21.123 35.748C38.015 48.48 48 37.07 64 37zm56.126 4H78.294c7.403 6 12.299 13.884 12.299 23.369 0 4.663-1.183 8.631-3.268 13.631h.015l-27.757 47.511c1.335.087 2.682-.022 4.04-.022 33.609 0 60.855-27.746 60.855-61.355.001-8-1.546-15.134-4.352-23.134zM63.624 91.445c-11.672 0-21.611-7.414-25.368-17.789L13.07 30.585C6.565 40.271 2.767 51.93 2.767 64.474c0 30.632 22.634 55.972 52.089 60.224l20.996-36.179a26.853 26.853 0 01-12.228 2.926z" /></svg>
                                </a>}
                            </div>
                        </div>

                        // <div className="md:mr-5 transition duration-500 ease-in-out transform rounded-lg hover:scale-105 cursor-pointer border pb-6 pl-6 mb-6 rounded-lg">
                        //     <img src={el.thumbnail} alt="" />
                        //     <h1>{el.name}</h1>
                        //     <p>{el.description}</p>
                        //     <a href={el.github}>github</a>
                        //     {el.url && <a href={el.url}>web</a>}
                        // </div>
                    );
                })}
            </div>
        </div>
    )
}