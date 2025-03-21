import Link from "next/link"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "10 Best Practices for React Native Development",
    excerpt: "Learn the top 10 best practices that will help you build better React Native applications.",
    date: "October 15, 2023",
    author: "Sarah Johnson",
    image: "/placeholder.svg?height=400&width=600",
    category: "Development",
  },
  {
    id: 2,
    title: "Optimizing Performance in React Native Apps",
    excerpt: "Discover techniques to improve the performance of your React Native applications.",
    date: "September 28, 2023",
    author: "Michael Chen",
    image: "/placeholder.svg?height=400&width=600",
    category: "Performance",
  },
  {
    id: 3,
    title: "The Future of Cross-Platform Development",
    excerpt: "Explore the trends and technologies shaping the future of cross-platform mobile development.",
    date: "September 10, 2023",
    author: "Priya Patel",
    image: "/placeholder.svg?height=400&width=600",
    category: "Industry Trends",
  },
  {
    id: 4,
    title: "Building Accessible React Native Applications",
    excerpt: "Learn how to make your React Native apps more accessible to users with disabilities.",
    date: "August 22, 2023",
    author: "David Rodriguez",
    image: "/placeholder.svg?height=400&width=600",
    category: "Accessibility",
  },
  {
    id: 5,
    title: "React Native vs Flutter: A Comprehensive Comparison",
    excerpt: "Compare the pros and cons of React Native and Flutter for your next mobile project.",
    date: "August 5, 2023",
    author: "Emma Wilson",
    image: "/placeholder.svg?height=400&width=600",
    category: "Comparison",
  },
  {
    id: 6,
    title: "Implementing Authentication in React Native",
    excerpt: "A step-by-step guide to implementing secure authentication in your React Native app.",
    date: "July 18, 2023",
    author: "James Lee",
    image: "/placeholder.svg?height=400&width=600",
    category: "Security",
  },
]

export const metadata = {
  title: "Blog | Fyndx - React Native Experts",
  description: "Insights and articles about React Native development from the Fyndx team",
}

export default function BlogPage() {
  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">Our Blog</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
          Insights, tutorials, and industry updates from our team of React Native experts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id} className="group">
              <div className="bg-white rounded-xl shadow-md overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

