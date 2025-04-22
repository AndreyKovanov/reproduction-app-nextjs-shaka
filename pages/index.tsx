import { VideoPlayer } from '@/src/VideoPlayer';

const STREAM_MANIFEST = 'https://storage.googleapis.com/shaka-demo-assets/bbb-dark-truths-hls/hls.m3u8';

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return <div><VideoPlayer src={STREAM_MANIFEST} /></div>;
}
