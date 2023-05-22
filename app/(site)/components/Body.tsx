import Image from 'next/image'
import React from 'react'
import "../../globals.css"
import B from '@/app/svg/B'
import Blur from './Blur'
import Example from './Example'
import Truster from './Truster'
const Body = () => {
	return (
		<div className='w-full pt-20'>
			<div className='flex flex-row justify-between w-full h-[85vh]'>
				<div className='w-[50%] text-center h-full'>
					<p className="logo-text text-[80px]   ml-4 mt-16">Brocode</p>
					<p className="text-[40px]  ml-4">Become a full stack designer</p>
					<div className="flex flex-row gap-4 justify-center">
						<p className='flex flex-row items-center text-[#ffffff4d]'>Web based</p>
						<p className='flex flex-row items-center text-[#ffffff4d]'>Fast Code Generation</p>
						<p className='flex flex-row items-center text-[#ffffff4d]'>Community</p>
						<p className='flex flex-row items-center text-[#ffffff4d]'>Collaboration</p>
					</div>
					<div className='flex flex-row mt-5 gap-10 ml-4 justify-center'>
						<a href='' className='px-4 py-2 border-[2px] rounded-full'>Why Brocode</a>
						<a href='' className='px-10 py-2  rounded-full bg-[#646cff]'>Get Started</a>
					</div>
				</div>
				<div className='w-[50%] flex justify-center items-center h-full'>
					<div className='bg-div  w-[200px] h-[200px] blur-[72px]'>
						<div className=' h-[500px]' />
					</div>
					<div className=''>
						<B width={300} height={300} />
					</div>
				</div>
			</div>
			<div  className=" py-[100px] text-center">
				<p className="text-[40px]  text-center">Explore latest Examples</p>
				<div className='py-[20px] flex flex-row justify-center gap-3 	'>
					<Example image='/images/example1.png' link='' title='3d text' />
					<Example image='/images/example2.png' link='' title='Interactive Designs' />
					<Example image='/images/example3.png' link='' title='Iphone 13 mockup' />
					<Example image='/images/example4.png' link='' title='3d Text' />
				</div>
				<a href='' className='px-20 py-2  my-[55px]  rounded-full bg-[#646cff]'>See all Examples</a>
			</div>
			<div className='text-center py-4'>
				<p className='text-[40px]  text-[#ffffff4d] my-4'>Trusted by</p>
				<div className="flex flex-row justify-center gap-3">
                                        <Truster image='/svg/truster1.svg' link='' />
                                        <Truster image='/svg/truster2.svg' link='' />
                                        <Truster image='/svg/truster3.svg' link='' />
                                        <Truster image='/svg/truster4.svg' link='' />
                                        <Truster image='/svg/truster5.svg' link='' />
				</div>
			</div>
			<div>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus labore odio excepturi sint, fugit ut a cumque ipsa eaque blanditiis magnam nesciunt ad unde nihil sapiente, rem dignissimos quod dolores!
				Minus dolor nobis sint aliquam facere! Ab sint, repellat nulla corrupti tempora molestias hic numquam, voluptatum culpa laborum ullam architecto exercitationem deserunt aliquid quia consectetur recusandae dolores. Ipsa, sed dignissimos.
				Nam a quasi ab reiciendis quidem laboriosam necessitatibus, autem ut excepturi distinctio. Qui animi, nobis enim, molestias iure explicabo, modi sequi porro tempora odio iusto cupiditate perferendis accusantium dolore nostrum.
				Nostrum repellat, et reiciendis, eius at deleniti distinctio laboriosam rerum architecto repudiandae numquam beatae! Quibusdam fuga aliquid asperiores? Id accusamus obcaecati ducimus repudiandae ad nulla temporibus iusto repellat veritatis libero!
				Ducimus explicabo consequuntur reprehenderit delectus quidem, praesentium sunt possimus id laudantium quae officiis incidunt, quis necessitatibus? Obcaecati, dolores velit alias, accusamus nam magni debitis unde explicabo veritatis, sint magnam quas.
				Similique ducimus eius ut? Quae, perferendis, illum ex voluptate fuga ratione reiciendis cupiditate, alias itaque incidunt magnam dolores sapiente consequatur obcaecati nam velit quos blanditiis dolorem. Similique reiciendis assumenda consequuntur!
				Nesciunt ratione libero magnam aspernatur, nam doloribus aperiam eos facere cumque ipsum. Quod unde quae ducimus laborum ipsa dolorum quisquam, amet quasi odit voluptas aspernatur expedita sit consequuntur doloribus quis.
				Nemo asperiores nobis labore, dolores, sed accusantium, pariatur officiis repellat a repellendus adipisci laboriosam. Id sunt nisi vel quae obcaecati, dolores eos delectus expedita? Architecto accusamus molestias odit voluptates aut!
				Incidunt voluptatum, aliquam ratione ex magni veniam explicabo perspiciatis iste quasi. Soluta numquam dolorum, accusamus amet, expedita officia, sit quaerat eligendi dolore quo architecto est aut cum blanditiis dolor doloremque!
				Officiis ipsum, molestias quos temporibus repellendus provident pariatur sit, perspiciatis ratione optio maxime, officia sequi nesciunt autem quo laborum voluptate ducimus earum et. Pariatur doloremque assumenda animi itaque, ab autem.
				Dolorem laborum tempore nulla recusandae iste magni omnis sint perspiciatis similique. Aperiam, quaerat sit sequi fugiat, rerum molestiae impedit natus commodi deserunt, nesciunt vero labore vitae necessitatibus quo minima quae.
				Explicabo saepe fuga aperiam accusantium ratione distinctio repellendus, modi quae minus vel magni molestiae, voluptates sunt iure a rerum minima optio iste quos voluptatibus esse! Provident facere nulla aliquid delectus?
				Corporis consectetur laudantium nihil. Iusto maiores eaque cum facere, repudiandae soluta et assumenda veniam, quam consequatur architecto ducimus tempore accusantium alias magni fugit sunt placeat quos impedit animi ut! Rerum.
				Aliquid, ducimus reiciendis nobis numquam commodi quae suscipit voluptatibus blanditiis aut animi cum placeat qui harum debitis voluptatem culpa accusamus, expedita ad consequuntur optio alias, tenetur modi dolorum quas! Culpa?
				Placeat, molestias! Rerum dolor, quisquam ipsum ea, magni hic velit aliquid doloribus adipisci minima dignissimos sunt incidunt sequi eum quo voluptate vitae. Debitis recusandae et asperiores, totam minima atque? Fugiat?
				Recusandae expedita facere odit nobis quisquam est, iure, illo laboriosam velit blanditiis distinctio, quaerat numquam quibusdam ipsum deserunt similique. Nisi culpa deserunt natus, fugit hic sed aperiam praesentium totam maiores?
				Animi, ut tenetur. Voluptas consectetur cum doloremque, molestiae aut voluptatibus ipsam deleniti maxime optio praesentium facilis. Dolorum at esse repudiandae culpa officiis a eaque, iure nobis sint enim optio suscipit.
				Cum blanditiis quidem magni similique error fugit numquam eius facilis quis quod natus alias fuga ad facere consectetur, maiores laborum laboriosam ipsam repellendus omnis. Saepe est sequi rem accusamus soluta.
				Perferendis voluptatum, dolore provident aliquam corrupti quasi magnam enim debitis nulla dignissimos nobis optio excepturi ipsa! Totam nemo corporis cupiditate atque mollitia nihil magni soluta? Eligendi repellat vitae modi quibusdam.
				Placeat voluptatibus iusto, exercitationem pariatur omnis eveniet dicta quia nulla ullam autem vel voluptates adipisci repellendus vero nostrum non magni harum aliquam nemo quidem ducimus facilis iure veniam totam! Quia?
				Aspernatur mollitia sunt repudiandae distinctio, architecto voluptas enim ipsam ratione asperiores totam obcaecati consectetur numquam, id, fugiat quisquam! Harum molestias dolorum perspiciatis nemo accusamus dolor. Assumenda similique necessitatibus distinctio molestiae.
				Alias praesentium accusamus facilis non laborum iusto harum molestiae laboriosam consequatur ex exercitationem, ut consectetur commodi dolorem autem eligendi earum eos voluptatum tempore eaque. Dolor animi dolore autem excepturi esse.
				Veniam distinctio laboriosam voluptates animi expedita officiis sit nobis culpa beatae itaque optio voluptate et incidunt, vitae facilis omnis sed blanditiis ipsum? Provident beatae iure modi, earum molestias nostrum tenetur.
				Quisquam eveniet cumque, tempora aliquid vel odio minima mollitia doloremque. Molestiae ducimus laborum velit. Aut maxime animi placeat aspernatur error ab vero sed sequi expedita dicta rerum veritatis, nulla quod!
				Est saepe unde maxime nobis at tenetur voluptatum, sed modi ducimus voluptas assumenda nesciunt esse quam dolor consequatur facilis atque iste laudantium ex debitis doloremque quod. Officia qui nobis eos.
				Aliquid, fugiat, fuga corrupti neque modi nam velit sequi dicta ad vitae quibusdam. Reprehenderit voluptates repellat quos hic impedit, fugiat tempora officiis rerum, dolorum obcaecati, ea praesentium facilis similique ipsa.
				Exercitationem sed debitis quo blanditiis maxime consequatur enim porro corporis nulla iure. Voluptatibus sed assumenda saepe possimus numquam, alias perspiciatis, impedit vel deserunt illum, voluptatum corrupti vitae culpa placeat dolorem.
				Beatae autem at veniam reprehenderit harum eaque ad tempore voluptate praesentium possimus rerum quos, obcaecati impedit rem sit et placeat mollitia magni nesciunt eius quam eos, dolor optio. Iure, neque?
				Sequi repudiandae ratione aliquam cum obcaecati, quisquam quas soluta velit facilis, magnam dolorem nobis quasi aut illo voluptate saepe eos id dolorum asperiores aperiam pariatur dicta nisi tempora. Ea, consequuntur.
				Repellendus odit repudiandae autem eveniet doloremque earum, eligendi vel, ad aliquid excepturi dicta iusto ducimus voluptatem quia hic! At ea excepturi eveniet aliquam inventore molestias culpa dicta blanditiis, esse doloremque.
				Eveniet, minima esse. Voluptates excepturi officia rerum ut temporibus aspernatur eum maiores modi a, quis corporis quas, quidem omnis nam minima debitis qui natus, vel cupiditate quod nesciunt ea reiciendis.
				Pariatur quia, rem ipsam minus maiores impedit neque natus! Beatae maiores non nostrum iste rem incidunt consequatur nobis! Nostrum saepe tenetur iste quas aperiam animi odio, ut eaque hic harum.
				Labore amet adipisci mollitia voluptatem enim! Laborum tempora qui molestiae corporis neque recusandae consequuntur quos voluptate. Illo nobis molestiae nesciunt, asperiores consectetur veritatis minus tempora! Placeat doloribus odio esse veritatis!
				Cupiditate, illo optio, molestias error sapiente voluptatum deleniti eligendi modi nam perferendis nisi voluptate unde minus fugiat iusto obcaecati corrupti ratione accusamus debitis delectus suscipit pariatur blanditiis? Velit, eum rem?
				Quis commodi eum aperiam autem nesciunt perspiciatis quia error sed ad rem, necessitatibus dolores voluptatum itaque cumque velit doloribus exercitationem debitis rerum ex sunt soluta reprehenderit ea. Ullam, totam beatae.
				Veniam consequatur quibusdam et incidunt cum, iste nobis ipsum ut, tempora expedita est! Autem, neque. Dolorum quibusdam reiciendis totam corporis quaerat exercitationem ipsum, reprehenderit ut aliquam impedit voluptatum labore aut.
				Assumenda harum quas, temporibus error sequi nemo tenetur, nulla soluta sed autem atque dolor culpa aliquid deleniti, incidunt repellat cum eligendi! Dolores facere temporibus in vel cupiditate error sunt! Aut?
				Laudantium eos iste a modi rem adipisci dolor incidunt vitae voluptas ut, vel odio repudiandae voluptate placeat eum, quia pariatur tenetur ea perspiciatis mollitia. Nobis enim provident ipsum. Voluptatem, laborum.
				Pariatur repudiandae laudantium, doloremque aut aperiam nesciunt facilis. Corporis perferendis iure maxime est perspiciatis atque accusantium tempore, minima soluta blanditiis ipsum saepe laudantium eveniet sunt magnam voluptate facilis tempora. Dicta!
				Ratione quas sequi ea veritatis magni eveniet eos dolor ducimus recusandae hic officiis, iste expedita velit saepe quibusdam sed veniam eius vitae accusantium praesentium blanditiis quo non? Suscipit, rerum excepturi?
				Quia, corrupti. Veritatis deserunt odit inventore fugiat ipsa quaerat recusandae modi sapiente reprehenderit sint beatae facilis ea, incidunt explicabo. Hic sequi nobis quas, magni ullam quis inventore magnam reiciendis omnis.
				Reprehenderit corporis architecto tenetur ratione! Exercitationem, expedita nisi ducimus repellendus vitae quis odit. Est, impedit eveniet sequi atque, consequatur repudiandae porro et assumenda fugiat debitis perspiciatis animi blanditiis, ullam autem.
				Architecto ipsum earum labore deserunt aspernatur sapiente reiciendis voluptates eligendi a praesentium minima, quam necessitatibus molestiae. Nulla fugit asperiores autem nemo praesentium voluptate, hic quibusdam, dolorum aliquid provident, ipsam adipisci!
				Dolorum rerum illum consequatur! Consequatur deleniti in temporibus commodi placeat voluptate obcaecati at! Velit ipsa ad voluptate ut! Eius mollitia molestiae nam accusamus ullam ex laudantium eos ipsum consequatur perspiciatis.
				Nisi doloribus nam harum corrupti quae quibusdam accusantium commodi nobis ex veritatis tempora obcaecati ab cum dolore placeat quis distinctio repellat, possimus necessitatibus. In incidunt eaque, necessitatibus modi quas iusto!
				Dolorum fugit deserunt optio ratione accusantium dicta dolores voluptate aliquam totam similique, ducimus libero, adipisci doloremque dignissimos ipsam ex voluptatibus architecto, quisquam quod corporis laborum vero! Ipsam libero praesentium facilis.
				Vero corrupti veniam quibusdam exercitationem perferendis in ea voluptas enim quod, ex optio earum, animi blanditiis quia beatae! Deleniti sint quas, in aspernatur magnam illum? Iusto sint dolore modi ratione.
				Libero quidem quas quae natus accusantium, blanditiis, ad labore error, pariatur sunt ipsum fugit voluptate aperiam obcaecati. Ducimus est magnam, id eveniet quidem, ullam dolorum necessitatibus maiores dolorem unde voluptatem!
				Est omnis consequatur velit? Rerum dicta dolor officiis suscipit distinctio consectetur assumenda, ut deserunt, unde eaque in repellat explicabo alias aut cum corporis quo dignissimos voluptates quae sapiente! Officia, blanditiis.
				Placeat, incidunt maxime velit, distinctio soluta asperiores voluptatum reprehenderit dolor, dolorum sequi voluptatem aut officiis quos tempore. Cupiditate laborum iste accusamus recusandae doloremque animi rerum quo unde ipsum! Laborum, nihil?
				Officia impedit facere maxime eaque blanditiis odio quas harum dolorem repellendus ad expedita reiciendis, veniam porro magnam! Blanditiis, rerum! Assumenda suscipit incidunt quas temporibus, atque veniam corporis debitis? Aspernatur, excepturi.
				Doloribus voluptatum ratione quia ab non ea fuga at nulla sit dolore, maxime corrupti deleniti doloremque dolorum laboriosam distinctio perferendis labore. Iusto corporis iste eaque quis suscipit nisi natus modi.
				In commodi temporibus, iure, eveniet cumque reiciendis molestiae provident a voluptatibus nobis amet molestias, eius quisquam ex distinctio facere quod! Quidem voluptas eligendi cupiditate dicta, doloremque qui inventore consequatur saepe.
				Nesciunt ducimus, at, obcaecati beatae saepe odit, et provident perferendis vero placeat cupiditate modi fugiat cum suscipit hic incidunt porro. Iste beatae odit earum autem cum recusandae totam, repellat expedita!
				Suscipit voluptas doloribus aliquid tempora delectus vitae odio, unde, ducimus debitis veniam nobis. Totam a vel sit nostrum nesciunt eveniet temporibus magni, illum incidunt ducimus voluptas repellat unde possimus. Temporibus?
				Debitis eius temporibus alias, quos inventore eveniet mollitia non, eos laudantium adipisci provident, earum dicta iusto necessitatibus ut nisi consectetur consequatur impedit sit odit quasi accusamus voluptas perferendis. Esse, voluptas.
				Quas id vero maxime laboriosam tenetur ex ullam, inventore ut repellendus itaque perspiciatis architecto est quia ea? Sit inventore porro laboriosam, error animi esse nobis cum quidem ut consectetur rerum.
				Sapiente deserunt suscipit distinctio, rerum rem saepe non culpa accusantium commodi ab assumenda quisquam atque, quod magni molestiae vitae. Architecto ipsam aperiam autem reprehenderit quo animi vel fugit quidem aliquam.
				Eligendi nihil commodi hic quam veritatis iure accusamus mollitia, minima voluptate, inventore tempora! Id, adipisci esse nihil architecto pariatur nam expedita perferendis eum dolorum voluptatem aperiam praesentium doloremque eos quasi?
				Dolor omnis fuga repellendus ipsum hic illo esse reprehenderit libero. Esse porro magnam et laborum, perferendis enim quod voluptate consectetur amet nam est recusandae praesentium atque aliquid adipisci, explicabo ullam.
				Eveniet maiores consequatur beatae earum molestiae accusamus consectetur dicta commodi, vel distinctio nesciunt iure incidunt odio alias! Consequuntur illo veniam debitis cupiditate, iusto, eius, error nihil reprehenderit consequatur repellendus soluta.
				Doloribus nobis nisi impedit ullam cupiditate minima omnis tempora! Alias, quia nisi quis deserunt distinctio ipsa mollitia eveniet quas, blanditiis dolores ab. Dignissimos dolorem laborum inventore animi libero earum perspiciatis.
				Porro, labore magnam aut eveniet qui est enim! Fugiat quam, mollitia accusantium adipisci vero animi est eaque minus delectus, quo libero eum expedita illo. Neque aliquid labore cumque in aperiam.
				Aspernatur molestiae quam debitis sunt cupiditate atque, recusandae minima harum architecto voluptatibus omnis velit corrupti vitae. Vitae quis nihil nisi labore soluta, veniam non tempore facilis. Nulla repellendus qui excepturi.
				Doloribus beatae ipsa atque maxime, reiciendis facere accusantium possimus, alias et totam pariatur molestiae voluptatum porro explicabo fugit dolorum ex, ipsam quia iste cumque non nihil inventore suscipit. Dolorem, similique.
				Mollitia libero asperiores cupiditate provident ea quis neque! Saepe consequatur quam, quaerat dignissimos excepturi quidem, perspiciatis quo, optio vel voluptates eius. Praesentium qui aliquid eos rerum ad sint voluptate vitae!
				Est reprehenderit sint ullam optio. Iure doloremque nulla pariatur quos nobis aspernatur placeat sint earum illum aliquid qui, dolore, optio consequatur eius rem id nostrum vero ducimus voluptatem laudantium? Officia.
				Rerum quo aperiam veniam possimus est sit quam, ut, accusamus voluptas id esse laborum dignissimos blanditiis recusandae impedit similique praesentium aspernatur labore nobis quibusdam, alias rem amet magni in. Modi!
				Nostrum rerum vitae autem veniam tempora culpa et laboriosam aut reprehenderit modi eveniet, fugiat aspernatur quia dolore illum qui rem temporibus similique odit aliquam vel exercitationem possimus omnis? Quo, consectetur.
				Sit quas facilis repudiandae sed cupiditate recusandae, perspiciatis voluptatum ut qui eius inventore quae, alias et odit aliquid numquam repellat debitis ullam quaerat tempore veritatis sequi exercitationem dolores odio. Esse.
				Quos reiciendis eius ab soluta itaque illum accusantium dolorum iure, corrupti necessitatibus, sint quibusdam architecto dolor sunt officiis aliquid obcaecati excepturi nemo nihil incidunt! Consequatur, suscipit. Sunt, molestias! Facere, ipsa.
				Veritatis eius quia ad accusamus quo officia voluptatem minus! Assumenda officiis necessitatibus provident ducimus perspiciatis voluptatum magnam dolorum modi quos, blanditiis, eum suscipit aspernatur repudiandae veritatis. Sint alias doloribus illum?
				Possimus voluptates rem sit, odio necessitatibus ratione quis deleniti blanditiis aliquam repudiandae fugit quos beatae delectus cum maxime! Voluptatibus quos maiores quam officia reiciendis inventore ullam ratione asperiores sed ut.
				Ab nulla eveniet perferendis nostrum expedita praesentium consequuntur iure rem inventore placeat, recusandae delectus excepturi ipsa voluptatibus atque obcaecati libero, doloribus amet, totam voluptas dolore illum fugiat molestias minima? Aut!
				Et veritatis quis, nobis ad blanditiis beatae? Sequi, quaerat ipsum? Explicabo veniam officiis vitae accusantium velit. Sint reprehenderit, quod inventore molestiae illo veritatis ea voluptatem tempore atque tempora facilis consequuntur!
				Cupiditate eius nisi, autem libero voluptatum nostrum velit itaque! Laboriosam est, labore dolores iure impedit, adipisci mollitia obcaecati repellat quis eveniet magnam sint, repellendus dignissimos? Suscipit doloremque voluptatum maxime rem?
				Necessitatibus ullam, commodi similique vitae facilis ex! Reiciendis perferendis quam, itaque sit quibusdam doloremque soluta officiis repellendus, alias fugit eius commodi! Expedita, velit accusamus tenetur inventore iste accusantium laborum error!
				Aliquid corrupti, doloremque eligendi, vero odio non perspiciatis quae libero adipisci saepe amet tempore, culpa molestiae quod nesciunt inventore asperiores optio debitis! Ex quam amet eum minima? Quis, voluptatum necessitatibus?
				Quod, nobis vel exercitationem quidem nam illo nihil quas quasi repudiandae sunt est ea mollitia pariatur! Expedita obcaecati, debitis blanditiis veniam dolore distinctio facilis quos, placeat omnis, dolores eaque neque!
				Debitis aliquid vero in, perferendis delectus modi quae esse sed, ut veritatis similique tenetur dolor quis saepe ab rerum repudiandae nemo aut atque. Perferendis fuga aliquid repudiandae excepturi laborum tempora.
				Iste placeat, repellendus magnam eveniet quaerat laborum voluptate reiciendis voluptates molestias minus? Cumque repudiandae ab, consequatur ut at dignissimos, ullam rem nihil doloremque, pariatur obcaecati quia tempora deserunt numquam fuga?
				Maiores explicabo voluptatibus magni alias minus eos dolores quos earum at ipsa ex, magnam dignissimos vero ducimus quasi reiciendis pariatur? Aperiam consequatur quos alias itaque maxime dolor recusandae, dolore ducimus!
				Voluptates excepturi id, illum magni ipsa quae odit dicta nesciunt fuga molestiae. Necessitatibus vel nihil eaque odio veniam. Eius fugit architecto placeat exercitationem maxime dolorum cum quos laboriosam repellat excepturi.
				Rem eaque tenetur reiciendis eligendi omnis cupiditate consequuntur commodi repellendus nostrum quisquam totam cumque iusto ex amet porro quidem alias accusantium architecto at facere vitae quae quibusdam, aut doloremque. Velit!
				Possimus rem, doloribus saepe earum voluptatibus modi reiciendis ipsam laborum dignissimos nesciunt, delectus alias dolores sapiente labore quis excepturi repudiandae cumque? Porro omnis illo recusandae corrupti voluptatum magni consequuntur dolores!
				Voluptatem necessitatibus dignissimos assumenda ab quod aliquid aspernatur cupiditate corporis nostrum perferendis iste doloremque aut autem animi, nam cum sequi. Expedita, rem enim aspernatur quis similique reiciendis cum quibusdam provident.
				Corporis, nihil! Laborum, unde beatae at odit quis provident? Praesentium laudantium excepturi dolor nesciunt eligendi est quisquam sunt, laborum nam, amet facere, unde laboriosam illo voluptatem possimus hic. Laboriosam, sint?
				Impedit obcaecati earum optio voluptate eaque rerum, autem, ab nemo adipisci, asperiores aspernatur fugiat exercitationem. Sit modi optio aut reprehenderit eligendi cumque iste minima nulla, odio eaque sunt maiores itaque.
				Dignissimos ad asperiores vel. Consequuntur at dignissimos enim, atque quo rerum! Ea ut ad velit deleniti itaque, repellendus repellat? Rem voluptates magni facilis similique nobis corporis earum nostrum non ea.
				Labore nihil ut exercitationem, adipisci illum, enim provident eaque perferendis voluptas illo sequi distinctio veniam tempora. Blanditiis id sit illum omnis fuga a. Tempore impedit iusto deleniti iste unde eius?
				Rem earum inventore deserunt quis eos nam corrupti delectus et quisquam quam deleniti consequuntur eum velit, non nesciunt dolor beatae sed quae expedita quas veniam provident ipsam aperiam? Fugiat, id.
				Rem quaerat iusto laboriosam. Tempora iusto magni fugit nemo possimus eius cupiditate veniam sit commodi asperiores placeat quae, maiores accusamus in totam, saepe labore doloremque, impedit odio voluptatibus minus? Voluptatum.
				Dignissimos laudantium magni repudiandae beatae explicabo pariatur sit atque, quidem dolorem, ullam labore quos impedit. Obcaecati fuga repudiandae quo ad suscipit inventore animi cumque id iure accusantium error, quasi explicabo!
				Commodi voluptate impedit veniam nobis obcaecati laudantium debitis ratione a, culpa non? Iusto dicta tempore distinctio eos quis adipisci, minima ex amet, harum illum voluptatem vitae sunt nemo ratione excepturi!
				Illo architecto, molestiae alias quibusdam molestias voluptates possimus ratione voluptatem, porro cum accusantium doloribus aperiam repellendus modi mollitia consequatur nesciunt deserunt rerum dolorum corrupti asperiores eius. Quaerat, quis. Quidem, omnis!
				Id ipsam nobis debitis aut! Cupiditate reprehenderit commodi porro eveniet quo deleniti, omnis consectetur sed voluptatem? Animi alias incidunt rem commodi tempora! Sapiente hic recusandae temporibus repellendus, expedita adipisci quidem?
				Totam, sint blanditiis! Itaque, labore inventore. A officia eum expedita corrupti, sit dolor, itaque dolorem dolore omnis adipisci corporis exercitationem quam illo dignissimos aspernatur unde odit minima blanditiis veritatis voluptate.
				Libero ipsa corporis eveniet. Eligendi similique possimus temporibus, fugiat reprehenderit aspernatur! Ab doloremque, illo eveniet nobis ducimus eum tempore at sint reprehenderit accusantium odit adipisci voluptate exercitationem rerum asperiores fugit.
				Soluta repellendus minima asperiores, sequi delectus in architecto unde odio ipsum officiis consectetur quasi dignissimos nihil, necessitatibus placeat molestias. Accusamus eveniet veniam doloremque et nesciunt! Dolor nisi laborum fuga officiis.
				Facilis cumque quibusdam est magni a, laboriosam deleniti labore asperiores explicabo praesentium ab accusamus! Ut sint at deleniti hic repellat eligendi vitae repellendus saepe error, inventore, reiciendis velit, eaque est!</p>
			</div>
		</div>
	)
}

export default Body