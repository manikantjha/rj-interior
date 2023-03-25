import ServiceChecklistItem from "./ServiceChecklistItem";

interface IServiceCard {
  objService: {
    title: string;
    checklist: string[];
  };
}

export default function ServiceCard(props: IServiceCard) {
  return (
    <div>
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div
          id="fullWidthTabContent"
          className="border-t border-gray-200 dark:border-gray-600"
        >
          <div
            className=" p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
            id="about"
            role="tabpanel"
            aria-labelledby="about-tab"
          >
            <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              {props.objService.title}
            </h2>

            <ul
              role="list"
              className="space-y-4 text-gray-500 dark:text-gray-400"
            >
              {props.objService.checklist.map((item, index) => (
                <ServiceChecklistItem key={index} checklistItem={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
