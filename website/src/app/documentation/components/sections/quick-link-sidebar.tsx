import Link from 'next/link';

const QuickLinkSidebar = ({ sections }: any) => {
  return (
    <div className="fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[18rem] py-10 overflow-y-auto hidden xl:block">
      <h2 className="text-lg font-semibold mb-4">Quick Reference</h2>
      <ul className="space-y-2">
        {sections.map((section: any) => (
          <li key={section.id}>
            <Link href={`#${section.id}`} scroll={false} className="text-blue-600 hover:text-blue-800">
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinkSidebar;