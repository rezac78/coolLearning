export default function LongDescription({ LongDescription }:any) {
        const processContent = (content:any) => {
                let processedContent = content.replace(/\[.*?\]/g, '');
                processedContent = processedContent.split('</code>').map((segment: string, index: number, array: string | any[]) => {
                        if (!segment.includes('<code>')) {
                                return segment.replace(/\. /g, `.<br/><div class="mt-2"></div>`);
                        } else if (index < array.length - 1) {
                                return segment + '</code>';
                        }
                        return segment;
                }).join('');
                return processedContent;
        };
        let processedContent = processContent(LongDescription);
        return (
                <div className="text-light-color-Font dark:text-dark-color-Font mt-4 p-4 bg-light-bg-box dark:bg-dark-bg-box rounded-lg shadow">
                        <div className="text-justify" dangerouslySetInnerHTML={{ __html: processedContent }}></div>
                </div>

        );
}