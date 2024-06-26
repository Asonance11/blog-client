import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface Ipost {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  username: string;
}

const PostCard = ({ title, imageUrl, description, id, username }: Ipost) => {
  return (
    <Link href={`/posts/${id}`}>
      <Card className="w-full">
        <CardContent>
          <div className="aspect-square relative rounded-lg">
            <Image
              src={imageUrl}
              alt="description"
              fill
              className="mt-4 aspect-square object-cover rounded-lg transition-all duration-300"
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start mt-2">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p>{description}</p>
          <p className="mt-2">
            By: <span className="font-medium">{username}</span>
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default PostCard;
