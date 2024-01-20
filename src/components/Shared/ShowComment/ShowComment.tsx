import ImagePart from "../ImgPart/Image";
interface ShowCommentProps {
        CommentData: any;
}
export default function ShowComment(props: ShowCommentProps) {
        return (
                <div>
                        {props.CommentData.map((comment:any) => (
                                <div key={comment._id} className="border-b border-gray-300 py-4">
                                        <div className="flex items-start">
                                                <ImagePart Src={"/user.png"} width={400} height={400} className={"w-10 h-10 rounded-full mr-4"}/>
                                                <div className="flex-1">
                                                        <div className="flex justify-between items-center">
                                                                <h5 className="font-bold">{comment.name}</h5>
                                                                <span className="text-sm text-gray-500">{new Date(comment.postedAt).toLocaleDateString()}</span>
                                                        </div>
                                                        <p className="mt-2">{comment.comment}</p>
                                                </div>
                                        </div>
                                </div>
                        ))}
                </div>
        );
};