import { faqsData } from '~/shared/data';
import HeaderWidget from '../common/HeaderWidget';
import Collapse from '../common/Collapse';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';

const FAQs2 = () => {
  const { header, items } = faqsData;

  return (
    <section id="faqsTwo">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {header && <HeaderWidget header={header} titleClassname="text-3xl sm:text-4xl" />}
        <Collapse
          items={items}
          classCollapseItem="mb-2 rounded-md border border-gray-300 shadow-md md:px-6 py-4 px-5 md:py-5"
          iconUp={<IconChevronUp className="h-6 w-6 text-primary-600 dark:text-slate-200" />}
          iconDown={<IconChevronDown className="h-6 w-6 text-primary-600 dark:text-slate-200" />}
        />
      </div>
    </section>
  );
};

export default FAQs2;
