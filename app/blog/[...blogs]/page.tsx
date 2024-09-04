import React from 'react';

interface Params {
    blogs: string[];
}

interface Props {
    params: Params;
}

export default function Page(props: Props) {
    const { params } = props;
    const joinedBlogs = params.blogs.join('/'); // Join the blogs array with "/"

    return (
        <div>
            Bạn đang xem blog với đường dẫn: {joinedBlogs}
        </div>
    );
}
