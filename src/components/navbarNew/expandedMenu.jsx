export function ExpandedMenu({}) {
    return (
        <div className='p-3 border-b-2'>
            <div
                onClick={() => {
                    setExpanded((prev) => ({ id: "environment", state: !prev.state }));
                }}
                className='flex items-center justify-between cursor-pointer'
            >
                <span>Environment</span>
                {expanded.id === "environment" && expanded.state ? (
                    <IoIosArrowUp size={20} />
                ) : (
                    <IoIosArrowDown size={20} />
                )}
            </div>

            {expanded.id === "environment" && expanded.state && (
                <div className='mt-4'>
                    {ChainSubMenu.map(({ Icon, id, title }) => {
                        const subMenuClass = twMerge(
                            "flex justify-start items-center p-2 my-1 hover:bg-slate-300 cursor-pointer rounded-md",
                            selectedMenu.id === id && "bg-stone-400"
                        );
                        const iconClass = twMerge("mr-4", selectedMenu.id === id && "text-red-900");
                        const titleClass = twMerge(selectedMenu.id === id && "text-red-900");
                        return (
                            <div
                                onClick={() => {
                                    setSelectedMenu({ id });
                                }}
                                key={id}
                                className={subMenuClass}
                            >
                                <Icon size={20} className={iconClass} />
                                <span className={titleClass}>{title}</span>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
