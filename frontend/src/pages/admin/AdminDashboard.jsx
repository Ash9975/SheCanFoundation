import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
    LayoutDashboard,
    MessageSquare,
    LogOut,
    Search,
    Trash2,
    User,
} from "lucide-react";

import logo from "../../assets/logo.avif";
import {
    getContacts,
    deleteContact,
} from "../../services/contactService";

const ITEMS_PER_PAGE = 5;

const AdminDashboard = () => {
    const [contacts, setContacts] = useState([]);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] =
        useState(1);

    const isLoggedIn =
        localStorage.getItem("adminLoggedIn");

    if (!isLoggedIn) {
        return <Navigate to="/admin/login" />;
    }

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        try {
            const res = await getContacts();
            setContacts(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteContact(id);
            toast.success("Message deleted");
            setContacts((prev) =>
                prev.filter(
                    (contact) => contact._id !== id
                )
            );
        } catch (error) {
            console.log(error);

            toast.error(
                "Failed to delete message"
            );
        }
    };

    const handleLogout = () => {
        localStorage.removeItem(
            "adminLoggedIn"
        );

        toast.success("Logged out");
        setTimeout(() => {
            window.location.href =
                "/admin/login";
        }, 1000);
    };

    const filteredContacts =
        contacts.filter(
            (contact) =>
                contact.name
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                contact.email
                    .toLowerCase()
                    .includes(search.toLowerCase())
        );

    const totalPages = Math.ceil(
        filteredContacts.length /
        ITEMS_PER_PAGE
    );

    const currentContacts =
        filteredContacts.slice(
            (currentPage - 1) *
            ITEMS_PER_PAGE,
            currentPage * ITEMS_PER_PAGE
        );

    return (
        <div className="lg:min-h-screen bg-gradient-to-r from-black via-[#0b0b0b] to-[#151515] text-white flex">

            {/* SIDEBAR */}

            <aside className="w-64 border-r border-white/10 bg-[#0c0c0c] p-6 hidden lg:flex flex-col justify-between">
                <div>
                    <div className="flex items-center gap-3 mb-10">
                        <img
                            src={logo}
                            alt=""
                            className="w-14 h-14 rounded-lg"
                        />

                        <div>
                            <h2 className="font-bold">
                                She Can
                            </h2>

                            <p className="text-xs text-gray-400">
                                Foundation
                            </p>
                        </div>
                    </div>

                    <nav className="space-y-3">

                        <div className="flex items-center gap-3 bg-red-600 px-4 py-3 rounded-xl cursor-pointer">
                            <LayoutDashboard size={18} />
                            Dashboard
                        </div>

                        <div className="flex items-center gap-3 px-4 py-3 text-gray-400 cursor-pointer">
                            <MessageSquare size={18} />
                            Messages
                        </div>

                    </nav>
                </div>

                <div className="space-y-3">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 w-full bg-red-600 px-4 py-3 rounded-xl shadow-lg shadow-red-600/20 cursor-pointer transition-all duration-300 hover:scale-[1.03]  active:scale-95"
                    >
                        <LogOut size={18} />
                        Logout
                    </button>
                </div>
            </aside>

            {/* MAIN */}

            <main className="flex-1 p-6 md:p-10">

                {/* HEADER */}

                <div className="flex items-center justify-between gap-3 md-8 my-3">

                    <div className="flex items-center gap-3">
                        <span className=" md:block text-gray-400">
                            Welcome, Admin
                        </span>

                        <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                            <User size={18} />
                        </div>
                    </div>

                    <div>
                        <button
                            onClick={handleLogout}
                            className=" lg:hidden bg-red-600 hover:bg-red-500 px-3 py-2 rounded-lg text-sm "
                        >
                            Logout
                        </button>
                    </div>

                </div>

                {/* STATS */}

                <div className="grid md:grid-cols-3 gap-5 mb-8">

                    <div className="bg-[#111] border border-white/10 rounded-2xl p-5">
                        <p className="text-gray-400">
                            Total Messages
                        </p>

                        <h2 className="text-4xl font-bold mt-2">
                            {contacts.length}
                        </h2>
                    </div>

                    <div className="bg-[#111] border border-white/10 rounded-2xl p-5">
                        <p className="text-gray-400">
                            Today's Messages
                        </p>

                        <h2 className="text-4xl font-bold mt-2">
                            {contacts.length}
                        </h2>
                    </div>

                    <div className="bg-[#111] border border-white/10 rounded-2xl p-5">
                        <p className="text-gray-400">
                            This Month
                        </p>

                        <h2 className="text-4xl font-bold mt-2">
                            {contacts.length}
                        </h2>
                    </div>

                </div>

                {/* TABLE CARD */}

                <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden">

                    <div className="flex justify-between items-center p-5 border-b border-white/10">

                        <h2 className="font-semibold text-xl">
                            Recent Messages
                        </h2>

                        <div className="relative">

                            <Search
                                size={16}
                                className="absolute left-3 top-3 text-gray-500"
                            />

                            <input
                                type="text"
                                placeholder="Search..."
                                value={search}
                                onChange={(e) =>
                                    setSearch(
                                        e.target.value
                                    )
                                }
                                className=" bg-black border border-white/10 rounded-lg pl-10 pr-4 py-2 outline-none "
                            />
                        </div>
                    </div>

                    <div className="overflow-x-auto">

                        <table className="w-full">

                            <thead>

                                <tr className="text-left border-b border-white/10">

                                    <th className="p-4">
                                        Name
                                    </th>

                                    <th className="p-4">
                                        Email
                                    </th>

                                    <th className="p-4">
                                        Message
                                    </th>

                                    <th className="p-4">
                                        Date
                                    </th>

                                    <th className="p-4">
                                        Action
                                    </th>

                                </tr>

                            </thead>

                            <tbody classNa>

                                {currentContacts.map(
                                    (contact) => (
                                        <tr
                                            key={contact._id}
                                            className="border-b border-white/5 transition-all duration-300 hover:bg-white/[0.03] "
                                        >
                                            <td className="p-4">
                                                {contact.name}
                                            </td>

                                            <td className="p-4">
                                                {contact.email}
                                            </td>

                                            <td className="p-4 max-w-xs truncate">
                                                {
                                                    contact.message
                                                }
                                            </td>

                                            <td className="p-4">
                                                {new Date(
                                                    contact.createdAt
                                                ).toLocaleDateString()}
                                            </td>

                                            <td className="p-4">
                                                <button
                                                    onClick={() =>
                                                        handleDelete(
                                                            contact._id
                                                        )
                                                    }
                                                    className="text-red-500"
                                                >
                                                    <Trash2
                                                        size={18}
                                                    />
                                                </button>
                                            </td>

                                        </tr>
                                    )
                                )}

                            </tbody>

                        </table>

                    </div>

                    {/* PAGINATION */}

                    <div className="flex justify-end gap-2 p-5">

                        {[...Array(totalPages)].map(
                            (_, index) => (
                                <button
                                    key={index}
                                    onClick={() =>
                                        setCurrentPage(
                                            index + 1
                                        )
                                    }
                                    className={`
                    px-3 py-1 rounded
                    ${currentPage ===
                                            index + 1
                                            ? "bg-red-600"
                                            : "bg-black"
                                        }
                  `}
                                >
                                    {index + 1}
                                </button>
                            )
                        )}

                    </div>

                </div>

            </main>

        </div>
    );
};

export default AdminDashboard;