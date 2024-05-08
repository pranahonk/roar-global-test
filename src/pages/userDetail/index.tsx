import {Card} from "../../components";
import {For} from "solid-js";
import {ApplicantInfoProps} from "../../interface";
import {activities, applicants, examHistory, jobInformation} from "../../utils";
import ActivityItem from "../../components/helpers/ActivityItem";
import ToolbarEditor from "../../components/helpers/Editor";


function ApplicantInfo(props: ApplicantInfoProps) {
    return (
        <div class="grid grid-cols-2 grid-rows-1 gap-4">
            <span class="font-semibold">{props.label}</span>
            <span class='font-light'>{props.value}</span>
        </div>
    );
}


const UserDetail = () => {
    const applicantEntries = Object.entries(applicants);
    const jobEntriesEntries = Object.entries(jobInformation);
    const examHistoryEntries = Object.entries(examHistory);
    return (
        <>
            <div class="grid grid-cols-6 gap-4">
                <div class="col-span-2">
                    <Card header="Application Information" topClass={"min-h-[370px]"}>
                        <For each={applicantEntries}>
                            {([key, value]) => (
                                <ApplicantInfo key={key} label={key} value={value}/>
                            )}
                        </For>
                    </Card>
                </div>
                <div class="col-span-2 col-start-3">
                    <Card header="Referral Information" topClass={"min-h-[370px]"}>
                        <For each={jobEntriesEntries}>
                            {([key, value]) => (
                                <ApplicantInfo key={key} label={key} value={value}/>
                            )}
                        </For>
                    </Card>
                </div>
                <div class="col-span-2 col-start-5">
                    <Card header="Referral Information" topClass={"min-h-[370px]"}>
                        <For each={examHistoryEntries}>
                            {([key, value]) => (
                                <ApplicantInfo key={key} label={key} value={value}/>
                            )}
                        </For>
                    </Card>
                </div>
            </div>
            <div class="grid grid-cols-1 grid-rows-1 gap-4 mt-4">
                <ToolbarEditor/>
            </div>

            <div class="grid grid-cols-2 grid-rows-1 gap-4 mt-4">
                <div class="rounded-xl bg-gray-200 min-h-96 flex justify-center items-center">
                    <p class="font-bold text-6xl">PDF</p>
                </div>
                <div class="overflow-y-auto scrollbar w-full max-h-96 rounded-xl bg-gray-200 px-2 pb-14">
                    <ul
                        role="tablist"
                        class="relative flex flex-row p-4 rounded-lg bg-opacity-60"
                    >
                        <li
                            role="tab"
                            class="relative flex items-center justify-center w-full h-full px-2 py-1 font-sans text-base antialiased font-normal leading-relaxed text-center bg-transparent cursor-pointer select-none text-blue-gray-900"
                            data-value="all"
                        >
                            <div class="z-20 text-inherit">
                                &nbsp;&nbsp;Notes Timeline&nbsp;&nbsp;
                            </div>
                            <div class="absolute inset-0 z-10 h-full bg-white rounded-md shadow"/>
                        </li>
                        <li
                            role="tab"
                            class="relative flex items-center justify-center w-full h-full px-2 py-1 font-sans text-base antialiased font-normal leading-relaxed text-center bg-transparent cursor-pointer select-none text-blue-gray-900"
                            data-value="monitored"
                        >
                            <div class="z-20 text-inherit">
                                &nbsp;&nbsp;Findings&nbsp;&nbsp;
                            </div>
                        </li>
                    </ul>
                    <ul role="list" class="m-8 max-w-screen-md bg-white px-2 py-4">
                        <For each={activities}>{(activity) => (
                            <ActivityItem {...activity} />
                        )}</For>
                    </ul>

                </div>
            </div>

            <div class="text-center">
                <button class="my-10 bg-[#7bafe2] w-1/2 h-10 mx-auto text-white rounded-xl" role="button"
                        type="submit">
                    SUBMIT
                </button>
            </div>
        </>
    );
};

export default UserDetail;
