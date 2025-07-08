import { blogPosts } from './data';
import BlogList from './components/BlogList';
import Modal from './components/Modal';
// other imports

...

<BlogList posts={currentPosts} onReadMore={openModal} />
{modalData && <Modal post={modalData} onClose={closeModal} />}
