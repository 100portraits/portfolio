import { Breadcrumb } from "flowbite-react";
import { Link } from "react-router-dom";

const BreadcrumbGenerator = (links) => {

    var dict = links;
    var arr = [];

    for (var key in dict) {
        arr.push(dict[key]);
    }
    arr=arr[0];
    return (
        <div>
            <Breadcrumb className="mb-2">
            {arr.map((item, key) => (
                    <Breadcrumb.Item key={key} className="text-2xl text-gray-700  dark:text-slate-300 ">
                        <Link className="text-lg hover:text-slate-950 text-gray-700  dark:text-slate-300 dark:hover:text-white hover:underline underline-offset-[6px]" to={item.link}>{item.title}</Link>
                    </Breadcrumb.Item>
            ))}
            </Breadcrumb>
        </div>
    );
}

export default BreadcrumbGenerator;