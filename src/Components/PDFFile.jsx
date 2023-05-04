import React, { useEffect, useState } from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "gray",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    textAlign: "center",
    color: "gray",
  },
});

const PDFFile = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("Blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);
  return (
    <div>
      {blogs.map((dt) => {
        return (
          <div key={dt.id}>
            <Document>
              <Page style={styles.body}>
                <Image src={dt.blogImage} />
                <Text style={styles.header} fixed>
                  <p className="text-2xl font-bold">{dt.question}</p>
                </Text>
                <Text style={styles.header} fixed>
                  <p className="text-md font-bold">{dt.answer}</p>
                </Text>
                <Text
                  style={styles.pageNumber}
                  render={({ pageNumber, totalPages }) =>
                    `${pageNumber} / ${totalPages}`
                  }
                  fixed
                />
              </Page>
            </Document>
          </div>
        );
      })}
    </div>
  );
};

export default PDFFile;
