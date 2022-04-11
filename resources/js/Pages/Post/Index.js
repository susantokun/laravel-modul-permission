import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage, Head } from "@inertiajs/inertia-react";

export default function Dashboard(props) {
    const { posts } = usePage().props;
    const data = posts;

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Posts
                </h2>
            }
        >
            <Head title="Posts" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-4">
                            <div className="container mx-auto">
                                <div className="flex items-center justify-between mb-6">
                                    <InertiaLink
                                        className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                        href={route("posts.create")}
                                    >
                                        Create Post
                                    </InertiaLink>
                                </div>

                                <div className="overflow-x-auto bg-white rounded shadow">
                                    <table className="w-full whitespace-nowrap">
                                        <thead className="text-white bg-gray-600">
                                            <tr className="font-bold text-left">
                                                <th className="px-6 pt-5 pb-4">
                                                    #
                                                </th>
                                                <th className="px-6 pt-5 pb-4">
                                                    Title
                                                </th>
                                                <th className="px-6 pt-5 pb-4">
                                                    Description
                                                </th>
                                                <th className="px-6 pt-5 pb-4">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map(
                                                ({
                                                    id,
                                                    title,
                                                    description,
                                                }) => (
                                                    <tr key={id} className="">
                                                        <td className="border-t">
                                                            <InertiaLink
                                                                href={route(
                                                                    "posts.edit",
                                                                    id
                                                                )}
                                                                className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                                            >
                                                                {id}
                                                            </InertiaLink>
                                                        </td>
                                                        <td className="border-t">
                                                            <InertiaLink
                                                                href={route(
                                                                    "posts.edit",
                                                                    id
                                                                )}
                                                                className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                                            >
                                                                {title}
                                                            </InertiaLink>
                                                        </td>
                                                        <td className="border-t">
                                                            <InertiaLink
                                                                tabIndex="1"
                                                                className="flex items-center px-6 py-4"
                                                                href={route(
                                                                    "posts.edit",
                                                                    id
                                                                )}
                                                            >
                                                                {description}
                                                            </InertiaLink>
                                                        </td>
                                                        <td className="border-t">
                                                            <InertiaLink
                                                                tabIndex="1"
                                                                className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                                                href={route(
                                                                    "posts.edit",
                                                                    id
                                                                )}
                                                            >
                                                                Edit
                                                            </InertiaLink>
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                            {data.length === 0 && (
                                                <tr>
                                                    <td
                                                        className="px-6 py-4 border-t"
                                                        colSpan="4"
                                                    >
                                                        No data found.
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
