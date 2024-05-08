import {JSX} from "solid-js/jsx-runtime";

interface Activity <T extends JSX.Element | string>{
    avatar?: string;
    title: string;
    child: T;
    user?: string;
    date?: string;
}

const ActivityItem = <T extends JSX.Element | string>(props: Activity<T>) => {
    return (
        <li class="group relative flex flex-col pb-8 pl-7 last:pb-0">
            <div
                class="absolute bottom-0 left-[calc(0.25rem-0.5px)] top-0 w-px bg-[#f2f0f0] group-first:top-3">
            </div>
            {props.avatar ?  (
                <div
                    class="absolute -left-1 -top-0 h-5 w-5 rounded-full ">
                    <img alt={props.user}
                         class="relative inline-block h-5 w-5 !rounded-full object-cover object-center"
                         src={props.avatar}/>
                </div>
            ) : (
                    <div class="absolute left-0 top-2 h-2 w-2 rounded-full border border-sky-300 bg-zinc-950"></div>
                )}


                <h3 class="mt-2 text-sm/6 font-semibold text-white">{props.title}</h3>
                <div class="flex items-end justify-between order-first tracking-[0.08em] text-black-100">
                    {props.child}
                </div>
        </li>
)};

export default ActivityItem;
