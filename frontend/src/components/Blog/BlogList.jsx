import { useState } from "react";
import "./BlogList.css";
import { FaShareAlt } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    category: "Backend",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    tags: ["Laravel"],
    title: "Mastering Laravel: Elegant PHP Framework for Modern Web Apps",
    author: "Akshit Trivedi",
    date: "15 Jan 2025",
  },
  {
    id: 2,
    category: "Backend",
    image:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80",
    tags: ["Java"],
    title: "Java Development: Building Robust Enterprise Solutions",
    author: "Manish Mori",
    date: "22 Feb 2025",
  },
  {
    id: 3,
    category: "Backend",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    tags: ["PHP"],
    title: "PHP Development: Dynamic and Cost-Effective Web Solutions",
    author: "Keval Shah",
    date: "10 Mar 2025",
  },
  {
    id: 4,
    category: "Frontend",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    tags: ["HTML5"],
    title: "HTML5 Development: Crafting Responsive and Interactive Web Pages",
    author: "Parth Parmar",
    date: "5 Apr 2025",
  },
  {
    id: 5,
    category: "Frontend",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    tags: ["React"],
    title:
      "React Development: Creating Interactive UIs with Component-Based Architecture",
    author: "Rohan Patel",
    date: "18 May 2025",
  },
  {
    id: 6,
    category: "Frontend",
    image:
      "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?auto=format&fit=crop&w=800&q=80",
    tags: ["Angular"],
    title: "Angular Development: Full-Featured Framework for Complex Web Apps",
    author: "Priya Sharma",
    date: "30 Jun 2025",
  },
  {
    id: 7,
    category: "Backend",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
    tags: ["Node.js"],
    title: "Node.js Development: Scalable Server-Side JavaScript Applications",
    author: "Vijay Kumar",
    date: "12 Jul 2025",
  },
  {
    id: 8,
    category: "CMS",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    tags: ["WordPress"],
    title: "WordPress Development: User-Friendly CMS for Websites and Blogs",
    author: "Nikhil Jain",
    date: "25 Aug 2025",
  },
  {
    id: 9,
    category: "Ecommerce",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    tags: ["Magento"],
    title: "Magento Development: Powerful E-commerce Platforms",
    author: "Akshit Trivedi",
    date: "7 Sep 2025",
  },
  {
    id: 10,
    category: "Ecommerce",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80",
    tags: ["Shopify"],
    title: "Shopify Development: Quick and Easy Online Store Creation",
    author: "Manish Mori",
    date: "14 Oct 2025",
  },
  {
    id: 11,
    category: "Mobile",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
    tags: ["React Native"],
    title: "React Native Development: Cross-Platform Mobile Apps",
    author: "Keval Shah",
    date: "28 Nov 2025",
  },
  {
    id: 12,
    category: "Mobile",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    tags: ["iOS"],
    title: "iOS Development: Native Apps for Apple Devices",
    author: "Parth Parmar",
    date: "3 Dec 2025",
  },
  {
    id: 13,
    category: "Mobile",
    image:
      "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=800&q=80",
    tags: ["Android"],
    title: "Android Development: Innovative Apps for Android Ecosystem",
    author: "Rohan Patel",
    date: "16 Jan 2026",
  },
  {
    id: 14,
    category: "AI",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    tags: ["AI Integration"],
    title: "AI Integration: Intelligent Automation and Insights",
    author: "Akshit Trivedi",
    date: "6 May 2026",
  },
];

const filters = [
  "All",
  "Backend",
  "Frontend",
  "Mobile",
  "Ecommerce",
  "CMS",
  "AI",
];

export default function BlogList() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredBlogs =
    activeFilter === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === activeFilter);

  return (
    <section className="blog-section">
      <div className="blog-filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className={activeFilter === filter ? "active" : ""}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="blog-container">
        {filteredBlogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <div className="blog-image">
              <img src={blog.image} alt={blog.title} />
            </div>

            <div className="blog-content">
              <div className="blog-tags">
                {blog.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="blog-title">{blog.title}</h3>

              <p className="blog-author">By {blog.author}</p>

              <div className="blog-footer">
                <span className="blog-date">{blog.date}</span>
                <FaShareAlt className="share-icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
